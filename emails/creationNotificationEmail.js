const creationNotificationEmail = (to, subject, message) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html dir="ltr" lang="en">
    <head>
      <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
      <title>Bu e-posta MovieJump tarafından gönderilmiştir.</title>
    </head>
  
    <body
      style="
        background-color: rgb(30, 33, 34);
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
          'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
          'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
          'Noto Color Emoji';
      "
    >
      <table
        align="center"
        width="100%"
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="max-width: 37.5em"
      >
        <tbody>
          <tr style="width: 100%">
            <td>
              <table
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="
                  background-color: rgb(24, 26, 27);
                  border-radius: 0.25rem;
                  padding-left: 1rem;
                  padding-right: 1rem;
                  padding-top: 1.5rem;
                  padding-bottom: 1rem;
                "
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        width="100%"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="margin-bottom: 0.625rem"
                      >
                        <tbody>
                          <tr>
                            <td>
                              <a
                                href="https://emirhankayabas.com.tr/"
                                style="color: #067df7; text-decoration: none"
                                target="_blank"
                                ><img
                                  alt="MovieJump Logo"
                                  src="https://emirhankayabas.com.tr/demo/public/thema-v1/images/logo-v2.png"
                                  style="
                                    display: inline-block;
                                    outline: none;
                                    border: none;
                                    text-decoration: none;
                                    height: 1.75rem;
                                  "
                              /></a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        align="center"
                        width="100%"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          background-color: rgb(27, 29, 30);
                          border-radius: 0.25rem;
                          margin-top: 2.5rem;
                          margin-bottom: 2.5rem;
                          padding: 1rem;
                        "
                      >
                        <tbody>
                          <tr>
                            <td>
                              <table
                                align="center"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                              >
                                <tbody>
                                  <tr>
                                    <td>
                                      <h4
                                        class="text-opacity-70"
                                        style="
                                          color: rgb(255, 255, 255);
                                          margin-top: 0px;
                                          padding-top: 0px;
                                        "
                                      >
                                        ${subject}
                                      </h4>
                                      <p
                                        class="text-opacity-70"
                                        style="
                                          font-size: 14px;
                                          line-height: 24px;
                                          margin: 16px 0;
                                          color: rgb(255, 255, 255);
                                          margin-top: 0px;
                                          margin-bottom: 0px;
                                          padding-top: 0px;
                                          padding-bottom: 0px;
                                        "
                                      >
                                        ${message}
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        align="center"
                        width="100%"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                      >
                        <tbody>
                          <tr>
                            <td>
                              <p
                                class="text-opacity-70"
                                style="
                                  font-size: 0.75rem;
                                  line-height: 1rem;
                                  margin: 16px 0;
                                  color: rgb(255, 255, 255);
                                  margin-top: 0px;
                                  margin-bottom: 0px;
                                  padding-top: 0px;
                                  padding-bottom: 0px;
                                  text-align: center;
                                "
                              >
                                Lütfen bu otomatik e-maili yanıtlamayın. <br />
                                Bizimle iletişime geçmeniz mi gerekiyor?
                                <a
                                  href="mailto:support@emirhankayabas.com.tr"
                                  style="
                                    color: rgb(37, 99, 235);
                                    text-decoration: none;
                                    text-decoration-line: underline;
                                  "
                                  target="_blank"
                                  >Bize ulaşın</a
                                >
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="
                  margin-top: 2.5rem;
                  margin-bottom: 1.25rem;
                  padding-left: 1rem;
                  padding-right: 1rem;
                "
              >
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="https://emirhankayabas.com.tr/"
                        style="color: #067df7; text-decoration: none"
                        target="_blank"
                        ><img
                          alt="MovieJump Logo"
                          src="https://emirhankayabas.com.tr/demo/public/thema-v1/images/logo-v2.png"
                          style="
                            display: inline-block;
                            outline: none;
                            border: none;
                            text-decoration: none;
                            height: 1.25rem;
                            margin-bottom: 0.5rem;
                          "
                      /></a>
                      <p
                        class="text-opacity-70"
                        style="
                          font-size: 0.75rem;
                          line-height: 1rem;
                          margin: 16px 0;
                          color: rgb(255, 255, 255);
                          margin-top: 0px;
                          margin-bottom: 0px;
                          padding-top: 0px;
                          padding-bottom: 0px;
                        "
                      >
                        © 2021 MovieJump. Tüm hakları saklıdır.
                        <br />MovieJump bu e-mail üzerinde gerçekleştirdiğiniz
                        işlemleri işler ve analiz eder.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
  </html>`;
};

export default creationNotificationEmail;