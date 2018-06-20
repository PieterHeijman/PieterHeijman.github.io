/**
 * Pseudo analytics, makes a call to IFTT to register a visit.
 * Does not store any private data, just a date and a page
 */

var page = window.location.href;
page = page.substr(page.lastIndexOf('/') + 1);

var url = 'https://maker.ifttt.com/trigger/trivial_discourse_ping/with/key/ctyIXiWwt6DzWOUF31D_RZ';
var params = 'value1='+page;

var xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xhr.send(params);