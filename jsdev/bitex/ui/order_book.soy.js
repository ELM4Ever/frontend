// This file was automatically generated from order_book.default.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.OrderBook.templates');

goog.require('soy');


bitex.ui.OrderBook.templates.OrderBook = function(opt_data) {
  var output = '<div class="text-center"><h4>' + soy.$$escapeHtml(opt_data.title) + '</h4></div><table class="table"><thead><tr>';
  var columnList6 = opt_data.columns;
  var columnListLen6 = columnList6.length;
  for (var columnIndex6 = 0; columnIndex6 < columnListLen6; columnIndex6++) {
    var columnData6 = columnList6[columnIndex6];
    output += '<th>' + soy.$$escapeHtml(columnData6) + '</th>';
  }
  output += '</tr></thead><tbody></tbody></table>';
  return output;
};


bitex.ui.OrderBook.templates.OrderBookDragOrder = function(opt_data) {
  var output = '';
  /** @desc Caption shown when user is drag & dropping an order in the order book */
  var MSG_UNNAMED_19 = goog.getMsg('Cancel/Replace Order');
  output += '<div class="order-book-drag-order">' + MSG_UNNAMED_19 + '</div>';
  return output;
};
