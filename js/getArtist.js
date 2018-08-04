var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.spotify.com/v1/artists/5KNNVgR6LBIABRIomyCwKJ",
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "Authorization": "Bearer BQBotU96q7BED6D2Uk2e-7tmbz65gFZVw68-KxQ913stHRWXqOyJPc7MwXyQpBJhM3RgTGp_Rzyk3dWgesDfNnBe9l9BHpj-Keg6OdYowfxQ-BLWakgIPinjZXUGMR8Jv1mGnFT5quUuZSRpEn1MNgy2TwBMxHyFEnJYgUHBbqTP9hHuMQ1LyDpBPgnKDAee4GXNMMP0wfOTlvHgcO8TfVuVWbbZ1Qte",
    "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
