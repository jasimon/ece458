// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Global variable containing the query we'd like to pass to Flickr. In this
 * case, kittens!
 *
 * @type {string}
 */


  /**
   * Sends an XHR GET request to grab photos of lots and lots of kittens. The
   * XHR's 'onload' event is hooks up to the 'showPhotos_' method.
   *
   * @public
   */
   console.log('kmasdf');
$(document).ready(function() {
     var socket = io.connect();
     var key = forge.random.getBytesSync(32);
     var iv = forge.random.getBytesSync(32);
  socket.on('sup', function() {
    console.log('sup');
  });
  socket.on('pwd', function(pwd) {
    console.log(pwd);
    var decipher = forge.cipher.createDecipher("AES-CBC", key);
    decipher.start({iv:iv});
    decipher.update(forge.util.createBuffer(pwd));
    decipher.finish();

    console.log(decipher.output.data);
    $('.stored-password').val(decipher.output.data);
  })
  $('.bt-discovery').on('click', function() {
    socket.emit('register browser');
    // var xhr = new XMLHttpRequest();
    // xhr.open("GET", "http://obscure-scrubland-1696.herokuapp.com/", true);
    // xhr.onreadystatechange = function() {
    //   if(xhr.readyState == 4) {
    //     console.log(xhr.responseText);
    //   }
    // };
    // xhr.send();
  });
  $('.generate-pwd').on('click', function() {
    $('.pwd').val(btoa(forge.random.getBytesSync(16)));
  });
  $('.pwd-request').on('click', function(){
    console.log($('.saved-passwords :selected').val());
    socket.emit('request password', $('.saved-passwords :selected').val());
  });

  $('.save-pwd').on('click', function() {
      handshake(savePass);
  });
  $('h1').css('color', 'red');
  function handshake(callback) {
    var secret = {};
    secret.a = 3;
    var ret =  {};
    ret.g = 5;
    ret.ga = Math.pow(ret.g, secret.a);
    socket.emit('handshake', ret, function(x,y) {
      return function(data) {
        console.log('calling back handshake browser');
        x(data, y);
      };
    }(callback, secret));
  }
  function savePass(data, secret) {
        console.log('handshook');
        console.log(data);
        var info = {};
    console.log('saving password');
    info.id = $('.save-name').val();
    if(info.id && $('.pwd').val()) {

      var cipher = forge.cipher.createCipher('AES-CBC', key);
      cipher.start({iv: iv});
      cipher.update(forge.util.createBuffer($('.pwd').val()));
      cipher.finish();
      var info = {};
      info.pwd = cipher.output.getBytes();
      info.id = $('.save-name').val();
      console.log(info.pwd)
      var infostring = JSON.stringify(info);
      var keybuffer = forge.util.createBuffer();
      var intTrunc = Math.pow(data.gb, secret.a) % 2147483647;
      for(var i = 0; i < 4; i++) {
        keybuffer.putInt32(intTrunc);
      }
      console.log(keybuffer.getBytes());
      console.log(keybuffer.getBytes());
      var cipher2 = forge.cipher.createCipher('AES-CBC', keybuffer.getBytes());
      cipher2.start({iv: keybuffer.getBytes()});
      cipher2.update(forge.util.createBuffer(infostring));
      cipher2.finish();
      socket.emit('save password', cipher2.output.getBytes(), function() {
        console.log('password saved callback');
      });
      $('.saved-passwords').append('<option value=' + info.id +  '>' + info.id  + '</option>');
      $('.pwd').val('');
    } else {
      alert('no name supplied');
    }
  }
})

