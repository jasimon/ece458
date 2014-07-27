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
    decipher.update(pwd);
    decipher.finish();

    console.log(decipher.output);
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
  $('.pwd-request').on('click', function(){
    console.log($('.saved-passwords :selected').val());
    socket.emit('request password', $('.saved-passwords :selected').val());
  });
  $('.save-pwd').on('click', function() {
    console.log('saving password');
    var cipher = forge.cipher.createCipher('AES-CBC', key);
    cipher.start({iv: iv});
    cipher.update(forge.util.createBuffer($('.pwd').val()));
    cipher.finish();
    var info = {};
    info.pwd = cipher.output;
    info.id = $('.save-name').val();
    console.log(info.pwd)
    if(info.id) {
      socket.emit('save password', info);
      $('.saved-passwords').append('<option value=' + info.id +  '>' + info.id  + '</option>');
    } else {
      alert('no name supplied');
    }
  });
  $('h1').css('color', 'red');
})

