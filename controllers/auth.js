import bcrypt from "bcryptjs";
import Auth from "../models/auth.js";

const auth = {
  login: async (req, res) => {
    const { user_email, user_password } = req.body;
    const existingUser = await Auth.findOne({ user_email });

    if (!existingUser) {
      return res
        .status(404)
        .json({ message: "Böyle bir kullanıcı bulunamadı." });
    }

    const isPasswordCorrect = await bcrypt.compare(
      user_password,
      existingUser.user_password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Girilen şifre hatalı." });
    }

    return res.status(200).json({
      status: "OK",
      user: {
        user_id: existingUser._id,
        user_name: existingUser.user_name,
        user_surname: existingUser.user_surname,
        user_email: existingUser.user_email,
        company_id: existingUser.company_id,
        user_type: existingUser.user_type,
      },
    });
  },

  register: async (req, res) => {
    const { user_name, user_surname, user_email, user_password } = req.body;
    const existingUser = await Auth.findOne({ user_email });

    if (existingUser) {
      return res
        .status(409)
        .json({ message: "Bu e-posta adresi zaten kullanılıyor." });
    }

    const hashedPassword = await bcrypt.hash(user_password, 12);
    const createdUser = await Auth.create({
      user_name: user_name,
      user_surname: user_surname,
      user_email: user_email,
      user_password: hashedPassword,
    });

    return res.status(201).json({
      status: "OK",
      user: {
        user_id: createdUser._id,
        user_name: createdUser.user_name,
        user_surname: createdUser.user_surname,
        user_email: createdUser.user_email,
        employer_id: createdUser.employer_id,
      },
    });
  },

  google: async (req, res) => {
    if (!req.body.access_token) {
      return res.status(400).json({ message: "Access Token geçersiz." });
    }

    try {
      const response = await fetch(
        process.env.GOOGLE_AUTH_URL + req.body.access_token
      );
      const data = await response.json();

      if (data.error) {
        return res.status(400).json({ message: "Google Auth hatalı." });
      }

      const { email, given_name, family_name } = data;
      const existingUser = await Auth.findOne({ email });

      if (existingUser) {
        return res.status(201).json({
          status: "OK",
          user: {
            user_id: existingUser._id,
            user_name: existingUser.user_name,
            user_surname: existingUser.user_surname,
            user_email: existingUser.user_email,
            employer_id: existingUser.employer_id,
          },
        });
      } else {
        const createdUser = await Auth.create({
          user_name: given_name,
          user_surname: family_name,
          user_email: email,
          user_password: "default",
        });

        return res.status(201).json({
          status: "OK",
          user: {
            user_id: createdUser._id,
            user_name: createdUser.user_name,
            user_surname: createdUser.user_surname,
            user_email: createdUser.user_email,
            employer_id: createdUser.employer_id,
          },
        });
      }
    } catch (error) {
      return res.status(500).json({ message: "Bir hata oluştu.", error });
    }
  },

  facebook: (req, res) => {
    // Facebook Auth
  },
};

export default auth;
