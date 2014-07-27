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
  socket.on('sup', function() {
    console.log('sup');
  });
  socket.on('pwd', function(pwd) {
    console.log(pwd);
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
  $('pwd-request').on('click') {
    socket.emit('request password');
  }

  $('h1').css('color', 'red');
})

