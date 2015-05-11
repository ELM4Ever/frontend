// This file was automatically generated from templates.default.soy.
// Please don't edit this file by hand.

goog.provide('bitex.templates');

goog.require('soy');


bitex.templates.ProfileViewChangePasswordPlaceHolder = function(opt_data) {
  return '<div class="span6 well"></div>';
};


bitex.templates.AlgoPermissionsDialogContent = function(opt_data) {
  var output = '';
  /** @desc Algorithm trading request permmissions dialog content */
  var MSG_UNNAMED_1685 = goog.getMsg('This algorithm is requesting your permission to:');
  output += '<p class="lead"> ' + MSG_UNNAMED_1685 + '</p><ul class="list-unstyled" style="line-height: 2">';
  var permissionList9 = opt_data.permissions;
  var permissionListLen9 = permissionList9.length;
  for (var permissionIndex9 = 0; permissionIndex9 < permissionListLen9; permissionIndex9++) {
    var permissionData9 = permissionList9[permissionIndex9];
    output += '<li><span class="fa fa-check text-success"></span>';
    switch (permissionData9) {
      case 'notification':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1687 = goog.getMsg(' Show notifications');
        output += MSG_UNNAMED_1687;
        break;
      case 'balance':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1689 = goog.getMsg(' See your balances');
        output += MSG_UNNAMED_1689;
        break;
      case 'execution_report':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1691 = goog.getMsg(' Listen to the execution reports from your orders');
        output += MSG_UNNAMED_1691;
        break;
      case 'new_order_limited':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1693 = goog.getMsg(' Send limited orders');
        output += MSG_UNNAMED_1693;
        break;
      case 'new_buy_order_limited':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1695 = goog.getMsg(' Send buy limited orders');
        output += MSG_UNNAMED_1695;
        break;
      case 'new_sell_order_limited':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1697 = goog.getMsg(' Send sell limited orders');
        output += MSG_UNNAMED_1697;
        break;
      case 'new_market_order':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1699 = goog.getMsg(' Send market orders');
        output += MSG_UNNAMED_1699;
        break;
      case 'new_buy_market_order':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1701 = goog.getMsg(' Send buy market orders');
        output += MSG_UNNAMED_1701;
        break;
      case 'new_sell_market_order':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1703 = goog.getMsg(' Send sell market order');
        output += MSG_UNNAMED_1703;
        break;
      case 'cancel_order':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1705 = goog.getMsg(' Cancel orders');
        output += MSG_UNNAMED_1705;
        break;
      default:
        output += soy.$$escapeHtml(permissionData9);
    }
    output += '</li>';
  }
  output += '</ul>';
  return output;
};


bitex.templates.APIKeyCreatedDialogContent = function(opt_data) {
  var output = '';
  /** @desc API Key created dialog description */
  var MSG_UNNAMED_1707 = goog.getMsg(
      'The API Key \'{$label}\' has been created successfully. Please make sure to store the credentials below in a secure location.',
      {'label': soy.$$escapeHtml(opt_data.label)});
  /** @desc API Key label on API Keycreated dialog */
  var MSG_UNNAMED_1709 = goog.getMsg('API Key');
  /** @desc API Password label on API Keycreated dialog */
  var MSG_UNNAMED_1711 = goog.getMsg('API Password');
  /** @desc API Secret label on API Keycreated dialog */
  var MSG_UNNAMED_1713 = goog.getMsg('API Secret');
  /** @desc Warning message on the API Key created dialog description */
  var MSG_UNNAMED_1715 = goog.getMsg('Warning! ');
  /** @desc Warning message on the API Key created dialog description */
  var MSG_UNNAMED_1717 = goog.getMsg('The API secret and password will never be displayed again. Make sure you have saved it before closing this window.');
  output += '<p>' + MSG_UNNAMED_1707 + '</p><dl class="dl-horizontal"><dt>' + MSG_UNNAMED_1709 + '</dt><dd>' + soy.$$escapeHtml(opt_data.key) + '</dd><dt>' + MSG_UNNAMED_1711 + '</dt><dd>' + soy.$$escapeHtml(opt_data.password) + '</dd><dt>' + MSG_UNNAMED_1713 + '</dt><dd>' + soy.$$escapeHtml(opt_data.secret) + '</dd></dl><div class="alert alert-error"><strong>' + MSG_UNNAMED_1715 + '</strong>' + MSG_UNNAMED_1717 + '</div>';
  return output;
};


bitex.templates.CustomerDetailDialog = function(opt_data) {
  var output = '';
  /** @desc Customer username */
  var MSG_UNNAMED_1719 = goog.getMsg('Username:');
  output += '<div class="row"><div class="span6">' + MSG_UNNAMED_1719 + soy.$$escapeHtml(opt_data.msg_customer_detail['Username']) + '</div></div>';
  return output;
};


bitex.templates.ErrorDialogContent = function(opt_data) {
  var output = '';
  /** @desc Error code label on error dialog content */
  var MSG_UNNAMED_1721 = goog.getMsg('Error code');
  output += '<p class="lead">' + soy.$$escapeHtml(opt_data.error_message) + '</p><dl class="dl-horizontal"><dt>' + MSG_UNNAMED_1721 + '</dt><dd>' + soy.$$escapeHtml(opt_data.error_code) + '</dd></dl>';
  return output;
};


bitex.templates.FileViewDialogContent = function(opt_data) {
  return '<img src="' + soy.$$escapeHtml(opt_data.filename) + '" style="width:500px"/>';
};


bitex.templates.DepositReceiptDialogContent = function(opt_data) {
  var output = '';
  /** @desc Download picture link on deposit receipt dialog content */
  var MSG_UNNAMED_1723 = goog.getMsg('Download');
  var receipt_urlList96 = opt_data.depositReceiptList;
  var receipt_urlListLen96 = receipt_urlList96.length;
  for (var receipt_urlIndex96 = 0; receipt_urlIndex96 < receipt_urlListLen96; receipt_urlIndex96++) {
    var receipt_urlData96 = receipt_urlList96[receipt_urlIndex96];
    output += '<img width="100%" src="' + soy.$$escapeHtml(receipt_urlData96) + '"/><a href="' + soy.$$escapeHtml(receipt_urlData96) + '" target="_blank">' + MSG_UNNAMED_1723 + '</a>';
  }
  return output;
};


bitex.templates.BrokerConfirmDepositContent = function(opt_data) {
  var output = '';
  /** @desc Control number label */
  var MSG_UNNAMED_1725 = goog.getMsg('Control number');
  /** @desc Amount label */
  var MSG_UNNAMED_1727 = goog.getMsg('Amount paid');
  /** @desc Fee percentage label */
  var MSG_UNNAMED_1729 = goog.getMsg('Fees:');
  /** @desc Net amount */
  var MSG_UNNAMED_1731 = goog.getMsg('Net amount');
  output += '<form class="form-horizontal broker-confirm-deposit"><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1725 + '</label><div class="controls"><label class="control-label" style="text-align: left;">' + soy.$$escapeHtml(opt_data.controlNumber) + '</label></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1727 + '</label><div class="controls"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(opt_data.id_value) + '" type="text" class="input-small" size="16" name="PaidValue" value="' + soy.$$escapeHtml(opt_data.value) + '"></div></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1729 + '</label><div class="controls"><div class="row-fluid"><div class="span4"><div class="input-append"><input id="' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="text" class="input-mini" size="16" name="Fee" value="' + soy.$$escapeHtml(opt_data.percentFee) + '"><span class="add-on">%</span></div></div><div class="span4"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="text" class="input-mini" size="16" name="Fee" value="' + soy.$$escapeHtml(opt_data.fixedFee) + '"></div></div><div class="span4"><label id="' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label broker-confirm-deposit-fee" style="text-align: left;"></label></div></div></div></div><div class="control-group"><label class="control-label net-amount">' + MSG_UNNAMED_1731 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label net-amount broker-confirm-deposit-net-amount" style="text-align: left;"></label><input id="' + soy.$$escapeHtml(opt_data.netValueID) + '_value" type="hidden" value=""></div></div></form>';
  return output;
};


bitex.templates.BrokerView = function(opt_data) {
  var output = '';
  if (opt_data.show_title) {
    /** @desc Title for the Broker view */
    var MSG_UNNAMED_1733 = goog.getMsg('My broker');
    output += '<div class="section-title"><h3>' + MSG_UNNAMED_1733 + '</h3></div>';
  }
  output += '<div class="content">';
  if (opt_data.msg_broker['BrokerID'] == -1) {
  } else {
    /** @desc Terms of service section subtitle on Broker view */
    var MSG_UNNAMED_1771 = goog.getMsg('Terms of service');
    output += '<address><strong>' + soy.$$escapeHtml(opt_data.msg_broker['BusinessName']) + '</strong><br/>' + soy.$$escapeHtml(opt_data.msg_broker['Address']) + '<br/>' + soy.$$escapeHtml(opt_data.msg_broker['City']) + ', ' + soy.$$escapeHtml(opt_data.msg_broker['State']) + ' ' + soy.$$escapeHtml(opt_data.msg_broker['ZipCode']) + ' - ' + soy.$$escapeHtml(opt_data.msg_broker['Country']) + '<br/>';
    if (opt_data.msg_broker['PhoneNumber1']) {
      /** @desc label in broker general information table */
      var MSG_UNNAMED_1735 = goog.getMsg('Phone');
      /** @desc label in broker general information table */
      var MSG_UNNAMED_1737 = goog.getMsg('P:');
      output += '<abbr title="' + MSG_UNNAMED_1735 + '">' + MSG_UNNAMED_1737 + '</abbr>' + soy.$$escapeHtml(opt_data.msg_broker['PhoneNumber1']) + ' ' + ((opt_data.msg_broker['PhoneNumber2']) ? ', ' + soy.$$escapeHtml(opt_data.msg_broker['PhoneNumber2']) : '') + '<br/>';
    }
    output += ((opt_data.msg_broker['Skype']) ? 'Skype: ' + soy.$$escapeHtml(opt_data.msg_broker['Skype']) + '<br/>' : '') + '<a href="mailto:' + soy.$$escapeHtml(opt_data.msg_broker['Email']) + '" target="_blank">' + soy.$$escapeHtml(opt_data.msg_broker['Email']) + '</a></address>';
    if (opt_data.msg_broker['BrokerID'] > 0) {
      /** @desc Allowed markets section subtitle on broker view */
      var MSG_UNNAMED_1739 = goog.getMsg('Markets');
      output += '<div class="row-fluid"><div class="span3"><h4>' + MSG_UNNAMED_1739 + '</h4>';
      var allowed_marketList200 = soy.$$getMapKeys(opt_data.msg_broker['AllowedMarkets']);
      var allowed_marketListLen200 = allowed_marketList200.length;
      for (var allowed_marketIndex200 = 0; allowed_marketIndex200 < allowed_marketListLen200; allowed_marketIndex200++) {
        var allowed_marketData200 = allowed_marketList200[allowed_marketIndex200];
        output += '<div class="row-fluid"><div class="span12">' + soy.$$escapeHtml(opt_data.msg_broker['AllowedMarkets'][allowed_marketData200]['description']) + '</div></div>';
      }
      output += '</div></div>';
    }
    if (opt_data.msg_broker['BrokerID'] >= 0) {
      if (opt_data.msg_broker['FeeStructure'].length > 0) {
        /** @desc Fee section subtitle on Broker view */
        var MSG_UNNAMED_1741 = goog.getMsg('Fees');
        /** @desc Operation column on Broker fees table */
        var MSG_UNNAMED_1743 = goog.getMsg('Operation');
        /** @desc Fees column on Broker fees table */
        var MSG_UNNAMED_1745 = goog.getMsg('Fee');
        /** @desc Terms column on Broker fees table */
        var MSG_UNNAMED_1747 = goog.getMsg('Terms');
        output += '<h4>' + MSG_UNNAMED_1741 + '</h4><table class="table table-bordered"><thead><tr><th>' + MSG_UNNAMED_1743 + '</th><th>' + MSG_UNNAMED_1745 + '</th><th>' + MSG_UNNAMED_1747 + '</th></tr></thead><tbody>';
        if (! opt_data.msg_broker['IsBrokerHub']) {
          if (opt_data.msg_broker['FormattedTransactionFeeBuy'] == opt_data.msg_broker['FormattedTransactionFeeSell']) {
            /** @desc label in broker fees table */
            var MSG_UNNAMED_1749 = goog.getMsg('Trade fee');
            output += '<tr><td>' + MSG_UNNAMED_1749 + '</td><td>' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTransactionFeeBuy']) + '</td><td></td></tr>';
          } else {
            /** @desc label in broker fees table */
            var MSG_UNNAMED_1751 = goog.getMsg('Trade fee - Buy side');
            /** @desc label in broker fees table */
            var MSG_UNNAMED_1753 = goog.getMsg('Trade fee - Sell side');
            output += '<tr><td>' + MSG_UNNAMED_1751 + '</td><td>' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTransactionFeeBuy']) + '</td><td></td></tr><tr><td>' + MSG_UNNAMED_1753 + '</td><td>' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTransactionFeeSell']) + ' %</td><td></td></tr>';
          }
        }
        var feeList245 = opt_data.msg_broker['FeeStructure'];
        var feeListLen245 = feeList245.length;
        for (var feeIndex245 = 0; feeIndex245 < feeListLen245; feeIndex245++) {
          var feeData245 = feeList245[feeIndex245];
          output += '<tr><td>' + soy.$$escapeHtml(feeData245['Operation']) + '</td><td>' + soy.$$escapeHtml(feeData245['Fee']) + '</td><td>' + soy.$$escapeHtml(feeData245['Terms']) + '</td></tr>';
        }
        output += '</tbody></table>';
      }
    }
    if (! opt_data.msg_broker['IsBrokerHub']) {
      /** @desc Wallet section subtitle on Broker view */
      var MSG_UNNAMED_1755 = goog.getMsg('Wallets');
      /** @desc Coin  column on Broker wallet table */
      var MSG_UNNAMED_1757 = goog.getMsg('Coin');
      /** @desc type  column on Broker wallet table */
      var MSG_UNNAMED_1759 = goog.getMsg('Type');
      /** @desc address column type on Broker wallet table */
      var MSG_UNNAMED_1761 = goog.getMsg('Address');
      /** @desc multisig column type on Broker wallet table */
      var MSG_UNNAMED_1763 = goog.getMsg('Multi signature');
      /** @desc managed by column on Broker wallet table */
      var MSG_UNNAMED_1765 = goog.getMsg('Managed by');
      output += '<h4>' + MSG_UNNAMED_1755 + '</h4><table class="table table-bordered"><thead><tr><th>' + MSG_UNNAMED_1757 + '</th><th>' + MSG_UNNAMED_1759 + '</th><th>' + MSG_UNNAMED_1761 + '</th><th>' + MSG_UNNAMED_1763 + '</th><th>' + MSG_UNNAMED_1765 + '</th></tr></thead><tbody>';
      var crypto_currenciesList276 = opt_data.msg_broker['CryptoCurrencies'];
      var crypto_currenciesListLen276 = crypto_currenciesList276.length;
      for (var crypto_currenciesIndex276 = 0; crypto_currenciesIndex276 < crypto_currenciesListLen276; crypto_currenciesIndex276++) {
        var crypto_currenciesData276 = crypto_currenciesList276[crypto_currenciesIndex276];
        var walletsList277 = crypto_currenciesData276['Wallets'];
        var walletsListLen277 = walletsList277.length;
        for (var walletsIndex277 = 0; walletsIndex277 < walletsListLen277; walletsIndex277++) {
          var walletsData277 = walletsList277[walletsIndex277];
          output += '<tr><td>' + soy.$$escapeHtml(crypto_currenciesData276['CurrencyDescription']) + '</td><td>' + soy.$$escapeHtml(walletsData277['type']) + '</td><td>';
          if (crypto_currenciesData276['CurrencyCode'] == 'BTC') {
            switch (walletsData277['address'][0]) {
              case 'm':
              case 'n':
              case '2':
              case '9':
              case 'c':
                output += '<a href="https://test-insight.bitpay.com/address/' + soy.$$escapeHtml(walletsData277['address']) + '/" target="_blank">' + soy.$$escapeHtml(walletsData277['address']) + '</a>';
                break;
              default:
                output += '<a href="https://blockchain.info/address/' + soy.$$escapeHtml(walletsData277['address']) + '/" target="_blank">' + soy.$$escapeHtml(walletsData277['address']) + '</a>';
            }
          } else {
            output += soy.$$escapeHtml(walletsData277['address']);
          }
          output += '</td><td>';
          if (walletsData277['multisig']) {
            /** @desc Multisig true */
            var MSG_UNNAMED_1767 = goog.getMsg('Yes');
            output += MSG_UNNAMED_1767;
          } else {
            /** @desc Multisig false */
            var MSG_UNNAMED_1769 = goog.getMsg('No');
            output += MSG_UNNAMED_1769;
          }
          output += '</td><td>' + soy.$$escapeHtml(walletsData277['managed_by']) + '</td></tr>';
        }
      }
      output += '</tbody></table>';
    }
    output += '<h4>' + MSG_UNNAMED_1771 + '</h4><iframe style="width:100%;height:400px;" src="' + soy.$$escapeHtml(opt_data.msg_broker['TosUrl']) + '"></iframe>';
  }
  output += '</div>';
  return output;
};


bitex.templates.CancelDepositDialogContent = function(opt_data) {
  var output = '';
  /** @desc Cancel deposit dialog message */
  var MSG_UNNAMED_1773 = goog.getMsg('Enter a reason for cancelling the deposit');
  /** @desc Cancel deposit reason label */
  var MSG_UNNAMED_1775 = goog.getMsg('Reason:');
  /** @desc reason for cancelling deposit */
  var MSG_UNNAMED_1777 = goog.getMsg('Other');
  output += '<p>' + MSG_UNNAMED_1773 + '</p><form class="form-horizontal"><fieldset><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.reason_id) + '" >' + MSG_UNNAMED_1775 + '</label><div class="controls"><select id="' + soy.$$escapeHtml(opt_data.reason_id) + '"><option value=0 selected>' + MSG_UNNAMED_1777 + '</option></select></div></div><div class="control-group"><div class="controls"><textarea id="' + soy.$$escapeHtml(opt_data.custom_reason_id) + '" rows="2" style=""></textarea></div></div></fieldset></form>';
  return output;
};


bitex.templates.CancelWithdrawDialogContent = function(opt_data) {
  var output = '';
  /** @desc Cancel withdraw dialog message */
  var MSG_UNNAMED_1779 = goog.getMsg('Enter a reason for cancelling the user withdraw');
  /** @desc Cancel withdraw reason label */
  var MSG_UNNAMED_1781 = goog.getMsg('Reason:');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1783 = goog.getMsg('Other');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1785 = goog.getMsg('Insufficient funds');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1787 = goog.getMsg('Account not verified');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1789 = goog.getMsg('Suspicion of fraud');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1791 = goog.getMsg('Withdrawing to a different account than yours');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1793 = goog.getMsg('Invalid wallet');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1795 = goog.getMsg('Invalid bank account');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1797 = goog.getMsg('Amount exceeded your daily withdraw limit');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1799 = goog.getMsg('User has deposits that are not yet confirmed');
  output += '<p>' + MSG_UNNAMED_1779 + '</p><form class="form-horizontal"><fieldset><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.reason_id) + '" >' + MSG_UNNAMED_1781 + '</label><div class="controls"><select id="' + soy.$$escapeHtml(opt_data.reason_id) + '"><option value=0>' + MSG_UNNAMED_1783 + '</option><option value=-1 selected>' + MSG_UNNAMED_1785 + '</option><option value=-2>' + MSG_UNNAMED_1787 + '</option><option value=-3>' + MSG_UNNAMED_1789 + '</option><option value=-4>' + MSG_UNNAMED_1791 + '</option><option value=-5>' + MSG_UNNAMED_1793 + '</option><option value=-6>' + MSG_UNNAMED_1795 + '</option><option value=-7>' + MSG_UNNAMED_1797 + '</option><option value=-8>' + MSG_UNNAMED_1799 + '</option></select></div></div><div class="control-group"><div class="controls"><textarea id="' + soy.$$escapeHtml(opt_data.custom_reason_id) + '" rows="2" style="display:none;"></textarea></div></div></fieldset></form>';
  return output;
};


bitex.templates.GoogleAuthenticationCodeDialogContent = function(opt_data) {
  var output = '';
  /** @desc Google Authenticator code dialog label */
  var MSG_UNNAMED_1801 = goog.getMsg('Google Authenticator code:');
  /** @desc Limit table field header */
  var MSG_UNNAMED_1803 = goog.getMsg('Google authenticator code');
  /** @desc Google Authenticator code placeholder */
  var MSG_UNNAMED_1805 = goog.getMsg('eg. 555555');
  output += '<form class="form-horizontal" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><fieldset><div class="control-group"><label>' + MSG_UNNAMED_1801 + '</label><input name="token" data-uniform-validators="required" data-uniform-label="' + MSG_UNNAMED_1803 + '" label="' + MSG_UNNAMED_1805 + '" class="input-large" type="text" size="10"></div></fieldset></form>';
  return output;
};


bitex.templates.WithdrawConfirmationDialogContent = function(opt_data) {
  var output = '';
  /** @desc Withdraw confirmation dialog message */
  var MSG_UNNAMED_1807 = goog.getMsg('We just sent a confirmation code to your email.');
  /** @desc Confirmation code placeholder on withdraw confirmation dialog */
  var MSG_UNNAMED_1809 = goog.getMsg('Confirmation code');
  /** @desc Withdraw confirmation dialog security disclaimer */
  var MSG_UNNAMED_1811 = goog.getMsg('This is security measure to improve your account security');
  output += '<form class="form-horizontal" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><fieldset><p>' + MSG_UNNAMED_1807 + '</p><div class="control-group"><label>Confirmation Code</label><input name="confirmation_code" type="text" data-uniform-validators="required" label="' + MSG_UNNAMED_1809 + '" class="input-block-level"></div><p><i>' + MSG_UNNAMED_1811 + '</i></p></fieldset></form>';
  return output;
};


bitex.templates.UserFeesDialogContent = function(opt_data) {
  var output = '';
  /** @desc Buy fee */
  var MSG_UNNAMED_1813 = goog.getMsg('Buy fee ');
  /** @desc Buy fee */
  var MSG_UNNAMED_1815 = goog.getMsg('Sell fee');
  output += '<form class="form-horizontal"><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.id) + '_buy_fee">' + MSG_UNNAMED_1813 + '</label><div class="controls"><input type="text" id="' + soy.$$escapeHtml(opt_data.id) + '_buy_fee"  style="text-align: right;" value="' + soy.$$escapeHtml(opt_data.buy_fee) + '"/><div class="checkbox"><label><input type="checkbox" id="' + soy.$$escapeHtml(opt_data.id) + '_broker_buy_fee"> Use Broker Fee</label></div></div></div><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.id) + '_sell_fee">' + MSG_UNNAMED_1815 + '</label><div class="controls"><input type="text" id="' + soy.$$escapeHtml(opt_data.id) + '_sell_fee"  style="text-align: right;" value="' + soy.$$escapeHtml(opt_data.sell_fee) + '"/><div class="checkbox"><label><input type="checkbox" id="' + soy.$$escapeHtml(opt_data.id) + '_broker_sell_fee"> Use Broker Fee</label></div></div></div></form>';
  return output;
};


bitex.templates.YourAccountSummary = function(opt_data) {
  var output = '';
  /** @desc Your account label in the right side bar */
  var MSG_UNNAMED_1817 = goog.getMsg('Your account');
  /** @desc Unconfirmed deposits */
  var MSG_UNNAMED_1819 = goog.getMsg('Unconfirmed deposits');
  output += '<h6>' + MSG_UNNAMED_1817 + '</h6>';
  var accountList430 = opt_data.accounts;
  var accountListLen430 = accountList430.length;
  for (var accountIndex430 = 0; accountIndex430 < accountListLen430; accountIndex430++) {
    var accountData430 = accountList430[accountIndex430];
    output += '<table class="table table-bordered account-summary-table" ><tbody><tr id="id_account_summary_' + soy.$$escapeHtml(accountData430['brokerID']) + '" class=\'account-summary-broker model-action-set\' data-key="SelectedBrokerID" data-value="' + soy.$$escapeHtml(accountData430['brokerID']) + '"' + ((opt_data.accounts.length <= 1 || accountData430['currencies'].length == 0) ? 'style="display:none;"' : '') + '><td colspan="3"><strong>' + soy.$$escapeHtml(accountData430['brokerName']) + '</strong></td></tr>';
    var currency_infoList442 = accountData430['currencies'];
    var currency_infoListLen442 = currency_infoList442.length;
    for (var currency_infoIndex442 = 0; currency_infoIndex442 < currency_infoListLen442; currency_infoIndex442++) {
      var currency_infoData442 = currency_infoList442[currency_infoIndex442];
      output += '<tr><td style="padding: 4px;' + ((! (currency_infoIndex442 == 0)) ? 'border-top: 0;' : '') + '"><strong>' + soy.$$escapeHtml(currency_infoData442['currency']) + '</strong></td><td style="padding: 4px;' + ((! (currency_infoIndex442 == 0)) ? 'border-top: 0;' : '') + '" ' + ((! currency_infoData442['showDeposit'] && ! currency_infoData442['showWithdraw']) ? 'colspan="2"' : '') + ' ><span class="bitex-model" data-model-key="formatted_balance_' + soy.$$escapeHtml(accountData430['brokerID']) + ':' + soy.$$escapeHtml(accountData430['clientID']) + '_' + soy.$$escapeHtml(currency_infoData442['currency_key']) + '" data-blink-class="balance-info-blink">' + ((currency_infoData442['formattedBalance']) ? ' ' + soy.$$escapeHtml(currency_infoData442['formattedBalance']) : '') + '</span><abbr title="' + MSG_UNNAMED_1819 + '"><em><span class="bitex-model" data-model-key="formatted_position_' + soy.$$escapeHtml(accountData430['brokerID']) + ':' + soy.$$escapeHtml(accountData430['clientID']) + '_' + soy.$$escapeHtml(currency_infoData442['currency_key']) + '" data-blink-class="balance-info-blink"></span></em></abbr></td>' + ((currency_infoData442['showDeposit'] && currency_infoData442['showWithdraw']) ? '<td style="padding: 4px;border-left:0;' + ((! (currency_infoIndex442 == 0)) ? 'border-top: 0;' : '') + '"><div class="btn-group">' + ((currency_infoData442['showDeposit']) ? '<button class="btn btn-mini" data-action="deposit" data-currency="' + soy.$$escapeHtml(currency_infoData442['currency']) + '"><i data-action="deposit" data-currency="' + soy.$$escapeHtml(currency_infoData442['currency']) + '" class="icon-download-alt"></i></button>' : '') + ((currency_infoData442['showWithdraw']) ? '<button class="btn btn-mini" data-action="withdraw" data-currency="' + soy.$$escapeHtml(currency_infoData442['currency']) + '"><i data-action="withdraw" data-currency="' + soy.$$escapeHtml(currency_infoData442['currency']) + '" class="icon-upload-alt"></i></button>' : '') + '</div></td>' : '') + '</tr>';
    }
    output += '</tbody></table>';
  }
  return output;
};


bitex.templates.AccountBalances = function(opt_data) {
  var output = '<table class="table table-striped" style="width: 350px"><tbody>';
  var currencyList506 = opt_data.currencies;
  var currencyListLen506 = currencyList506.length;
  for (var currencyIndex506 = 0; currencyIndex506 < currencyListLen506; currencyIndex506++) {
    var currencyData506 = currencyList506[currencyIndex506];
    /** @desc label for available balance in a currency */
    var MSG_UNNAMED_1821 = goog.getMsg(
        'Available {$currency}',
        {'currency': soy.$$escapeHtml(currencyData506)});
    output += '<tr><td><strong>' + MSG_UNNAMED_1821 + '</strong></td><td><span class="bitex-model" data-model-key="formatted_balance_' + soy.$$escapeHtml(currencyData506) + '" data-blink-class="balance-info-blink"></span></td>';
    if (opt_data.action == 'deposit') {
      /** @desc Deposit button label */
      var MSG_UNNAMED_1823 = goog.getMsg(' Deposit');
      output += '<td><button class="btn btn-mini" data-action="deposit"  data-currency="' + soy.$$escapeHtml(currencyData506) + '"><i data-action="deposit"  data-currency="' + soy.$$escapeHtml(currencyData506) + '" class="icon-plus"/>' + MSG_UNNAMED_1823 + '</button></td>';
    }
    if (opt_data.action == 'withdraw') {
      /** @desc Deposit button label */
      var MSG_UNNAMED_1825 = goog.getMsg(' Withdraw');
      output += '<td><button class="btn btn-mini" data-action="withdraw" data-currency="' + soy.$$escapeHtml(currencyData506) + '"><i data-action="withdraw" data-currency="' + soy.$$escapeHtml(currencyData506) + '" class="icon-minus"/>' + MSG_UNNAMED_1825 + '</button></td>';
    }
    output += '</tr>';
  }
  output += '</tbody></table>';
  return output;
};


bitex.templates.WaitingForDepositResponseDialogContent = function(opt_data) {
  var output = '';
  /** @desc processing deposit request waiting dialog msg */
  var MSG_UNNAMED_1827 = goog.getMsg('Processing deposit request...');
  output += '<div class="row-fluid" data-deposit-status="processing"><h5 class="text-center">' + MSG_UNNAMED_1827 + '</h5></div><div class="row-fluid"><div class="span6 offset3"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div></div>';
  return output;
};


bitex.templates.DepositCryptoCurrencyContentDialog = function(opt_data) {
  var output = '<div class="row-fluid" data-deposit-status="prepare"><h4 class="text-center">' + soy.$$escapeHtml(opt_data.deposit_message['Data']['InputAddress']) + '</h4>';
  if (opt_data.formattedAmount) {
    /** @desc deposit the amount */
    var MSG_UNNAMED_1829 = goog.getMsg(' Deposit the exact amount of :');
    output += '<div class="text-center">' + MSG_UNNAMED_1829 + ' ' + soy.$$escapeHtml(opt_data.formattedAmount) + '</div>';
  }
  output += '<div class="text-center"><img src="https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=bitcoin%3A' + soy.$$escapeHtml(opt_data.deposit_message['Data']['InputAddress']) + ((opt_data.amount) ? '%3Famount%3D' + soy.$$escapeHtml(opt_data.amount) : '') + '"/></div>';
  if (opt_data.hasInstantDepositsEnabled) {
    /** @desc Instant deposit warning */
    var MSG_UNNAMED_1831 = goog.getMsg('Your account has instant deposits enabled. In case you intentionally try to do a "double spending" attack, your account will be frozen, even if your double spending attack is not successful.');
    output += '<div class="alert alert-block">' + MSG_UNNAMED_1831 + '</div>';
  }
  output += '</div>';
  return output;
};


bitex.templates.CryptoCurrencyQRContentDialog = function(opt_data) {
  return '<div class="row-fluid" data-deposit-status="prepare"><h4 class="text-center">' + soy.$$escapeHtml(opt_data.data['Wallet']) + '</h4><div class="text-center"><img src="https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=' + soy.$$escapeHtml(opt_data.data['Wallet']) + '"/></div></div>';
};


bitex.templates.ConfirmTrustedAddressContentDialog = function(opt_data) {
  var output = '';
  /** @desc confirm trusted address dialog msg */
  var MSG_UNNAMED_1833 = goog.getMsg(' Do you want to enable instant deposits for this address?');
  /** @desc confirm trusted label placeholder */
  var MSG_UNNAMED_1835 = goog.getMsg('Enter a label for this address.');
  /** @desc confirm trusted address dialog msg */
  var MSG_UNNAMED_1837 = goog.getMsg('Only enable it if you have the private key for this address.');
  /** @desc confirm trusted address dialog msg */
  var MSG_UNNAMED_1839 = goog.getMsg('Always remember what happened at MtGox');
  /** @desc confirm trusted address dialog msg */
  var MSG_UNNAMED_1841 = goog.getMsg('Never ever under any circumstances leave your Bitcoins deposited at any Exchange, no matter how secure they claim to be. Bitcoins are meant to be with the people and not in the hands of the Exchange operator. We don\'t want to create a "pot of gold" that will attract hackers. The "Instant deposits" technology will allow you to send your bitcoins instantly to trade them in the exchange, thus eliminating the need for you to leave Bitcoins at the exchange in order to negotiate them quickly.');
  output += '<div class="row-fluid"><h3 class="text-center">' + MSG_UNNAMED_1833 + '</h3><h5 class="text-center">' + soy.$$escapeHtml(opt_data.data['Address']) + '</h5><div class="text-center"><input type="text" class="confirm-trusted-address-label" size="30" placeholder="' + MSG_UNNAMED_1835 + '"></input></div><h4 class="text-center">' + MSG_UNNAMED_1837 + '</h4><div class="alert alert-block"><h4>' + MSG_UNNAMED_1839 + '</h4>' + MSG_UNNAMED_1841 + '</div></div>';
  return output;
};


bitex.templates.InsufficientFundsContentDialog = function(opt_data) {
  var output = '';
  /** @desc Insufficient funds title */
  var MSG_UNNAMED_1843 = goog.getMsg('You don\'t have enough funds for this operation.');
  /** @desc Your account label on Insufficient Balance message */
  var MSG_UNNAMED_1845 = goog.getMsg('Your Account');
  /** @desc Your orders label on Insufficient Balance message */
  var MSG_UNNAMED_1847 = goog.getMsg('Your Orders');
  /** @desc Your orders label on Insufficient Balance message */
  var MSG_UNNAMED_1849 = goog.getMsg('Total available');
  output += '<div class="row-fluid"><p>' + MSG_UNNAMED_1843 + '</p><!-- ' + soy.$$escapeHtml(opt_data.currencyDescription) + ' --><table class="table table-bordered"><tr><td>' + MSG_UNNAMED_1845 + '</td><td><span class="bitex-model" data-model-key="formatted_balance_' + soy.$$escapeHtml(opt_data.balanceKey) + '" data-blink-class="balance-info-blink">' + ((opt_data.depositFormattedBalance) ? soy.$$escapeHtml(opt_data.depositFormattedBalance) : '-') + '</span></td></tr><tr><td>' + MSG_UNNAMED_1847 + '</td><td><span class="bitex-model" data-model-key="locked_formatted_balance_' + soy.$$escapeHtml(opt_data.balanceKey) + '" data-blink-class="balance-info-blink">' + ((opt_data.lockedFormattedBalance) ? soy.$$escapeHtml(opt_data.lockedFormattedBalance) : '-') + '</span></td></tr><tr style="font-weight: bolder"><td>' + MSG_UNNAMED_1849 + '</td><td><span class="bitex-model" data-model-key="available_formatted_balance_' + soy.$$escapeHtml(opt_data.balanceKey) + '" data-blink-class="balance-info-blink">' + ((opt_data.availableFormattedBalance) ? soy.$$escapeHtml(opt_data.availableFormattedBalance) : '-') + '</span></td></tr></table>';
  if (opt_data.lockedFormattedBalance) {
    /** @desc Insufficient funds instructions */
    var MSG_UNNAMED_1851 = goog.getMsg('Please either deposit funds or cancel some of your other orders.');
    output += '<p>' + MSG_UNNAMED_1851 + '</p>';
  }
  output += '</div>';
  return output;
};


bitex.templates.ConfirmDepositCryptoCurrencyContentDialog = function(opt_data) {
  var output = '';
  /** @desc deposit done dialog msg */
  var MSG_UNNAMED_1853 = goog.getMsg(' IMPORTANT! ');
  /** @desc deposit done dialog msg */
  var MSG_UNNAMED_1855 = goog.getMsg(
      ' We will generate a unique {$currencydescription} address that will be valid only for this transaction.',
      {'currencydescription': soy.$$escapeHtml(opt_data.currencydescription)});
  /** @desc deposit done dialog msg */
  var MSG_UNNAMED_1857 = goog.getMsg(' Did you understand? ');
  output += '<div class="row-fluid" data-deposit-status="confirm"><h3 class="text-center">' + MSG_UNNAMED_1853 + '</h3><h4 class="text-center">' + MSG_UNNAMED_1855 + '</h4><h3 class="text-center">' + MSG_UNNAMED_1857 + '</h3><br/><br/></div>';
  return output;
};


bitex.templates.DepositSlipContentDialog = function(opt_data) {
  return '<div class="row-fluid" data-deposit-status="done"><iframe allowtransparency="true" src="' + soy.$$escapeHtml(opt_data.rest_url) + '/get_deposit?deposit_id=' + soy.$$escapeHtml(opt_data.deposit_id) + '" frameborder="0" style="width: 500px; height: 500px; border: none;" scrolling="yes"></iframe></div>';
};


bitex.templates.FeesFormControls = function(opt_data) {
  var output = '';
  /** @desc Fee label */
  var MSG_UNNAMED_1859 = goog.getMsg('Fees:');
  /** @desc Fee percentage label */
  var MSG_UNNAMED_1861 = goog.getMsg('Percent fee');
  /** @desc Fee fixed label */
  var MSG_UNNAMED_1863 = goog.getMsg('Fixed fee');
  /** @desc Net amount */
  var MSG_UNNAMED_1865 = goog.getMsg('Net amount');
  output += '<div class="control-group"><label class="control-label">' + MSG_UNNAMED_1859 + '</label><div class="controls"><div class="row-fluid"><div class="span3"><div class="input-append"><input id="' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="text" class="input-mini" size="16"  style="width: 40px;" name="PercentFee" value="' + soy.$$escapeHtml(opt_data.percentFee) + '"><span class="add-on">%</span></div><span style="font-style: italic;">' + MSG_UNNAMED_1861 + '</span></div><div class="span1" style="margin-top: 4px;margin-bottom: -4px;"><span style="font-weight: bold;">+</span></div><div class="span3"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="text" class="input-mini" size="16" style="width: 40px;" name="FixedFee" value="' + soy.$$escapeHtml(opt_data.fixedFee) + '"></div><span style="font-style: italic;">' + MSG_UNNAMED_1863 + '</span></div><div class="span1" style="margin-top: 4px;margin-bottom: -4px;"><span style="font-weight: bold;">=</span></div><div class="span4"><label id="' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label" style="text-align: left;"></label></div></div></div></div><div class="control-group" style="' + ((opt_data.hideNetValueID) ? 'display:none' : '') + '"><label class="control-label net-amount">' + MSG_UNNAMED_1865 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label net-amount" style="text-align: left;"></label><input id="' + soy.$$escapeHtml(opt_data.netValueID) + '_value" type="hidden" value=""></div></div>';
  return output;
};


bitex.templates.FeesForm = function(opt_data) {
  var output = '';
  /** @desc requested amount */
  var MSG_UNNAMED_1867 = goog.getMsg('Requested Amount');
  output += '<form class="form-horizontal" data-deposit-status="prepare"><input type="hidden" name="Currency" value="' + soy.$$escapeHtml(opt_data.currency) + '"><input id="' + soy.$$escapeHtml(opt_data.amountID) + '" type="hidden" name="Amount" value="' + soy.$$escapeHtml(opt_data.amount) + '"><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1867 + '</label><div class="controls"><label class="control-label" style="text-align: left;">' + soy.$$escapeHtml(opt_data.formattedAmount) + '</label></div></div>' + bitex.templates.FeesFormControls({currencySign: opt_data.currencySign, percentFeeID: opt_data.percentFeeID, percentFee: opt_data.percentFee, fixedFeeID: opt_data.fixedFeeID, fixedFee: opt_data.fixedFee, totalFeesID: opt_data.totalFeesID, netValueID: opt_data.netValueID, hideNetValueID: true}) + '</form>';
  return output;
};


bitex.templates.DepositWithdrawDialogContent = function(opt_data) {
  var output = '<form class="form-horizontal" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><fieldset><input type="hidden" name="Currency" value="' + soy.$$escapeHtml(opt_data.currency) + '">' + ((opt_data.side == 'broker') ? '<input id="' + soy.$$escapeHtml(opt_data.amountID) + '" type="hidden" name="Amount" value="' + soy.$$escapeHtml(opt_data.amount / 1.0e8) + '">' : '') + '<div class="error"></div>';
  if (! opt_data.force_method) {
    if (opt_data.methods.length > 1) {
      /** @desc method */
      var MSG_UNNAMED_1869 = goog.getMsg('Method');
      output += '<div class="control-group"><label class="control-label">' + MSG_UNNAMED_1869 + '</label><div class="controls"><select id="' + soy.$$escapeHtml(opt_data.methodID) + '" name="Method" class="withdraw-method-selector">';
      var methodList740 = opt_data.methods;
      var methodListLen740 = methodList740.length;
      for (var methodIndex740 = 0; methodIndex740 < methodListLen740; methodIndex740++) {
        var methodData740 = methodList740[methodIndex740];
        output += '<option ' + ((methodIndex740 == 0) ? 'selected' : '') + ' value="' + soy.$$escapeHtml(methodData740['method']) + '" data-net-value="' + soy.$$escapeHtml(methodData740['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" data-percent-fee="' + soy.$$escapeHtml(methodData740['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" data-fixed-fee="' + soy.$$escapeHtml(methodData740['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '">' + soy.$$escapeHtml(methodData740['description']) + '</option>';
      }
      output += '</select></div></div>';
    } else {
      var methodList765 = opt_data.methods;
      var methodListLen765 = methodList765.length;
      for (var methodIndex765 = 0; methodIndex765 < methodListLen765; methodIndex765++) {
        var methodData765 = methodList765[methodIndex765];
        output += '<input  id="' + soy.$$escapeHtml(opt_data.methodID) + '" type="hidden" name="Method"  value="' + soy.$$escapeHtml(methodData765['method']) + '" data-net-value="' + soy.$$escapeHtml(methodData765['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" data-percent-fee="' + soy.$$escapeHtml(methodData765['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" data-fixed-fee="' + soy.$$escapeHtml(methodData765['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '">';
      }
    }
  }
  output += '<div class="withdraw-methods">';
  if (opt_data.methods.length == 0) {
    if (opt_data.verificationLevel <= 2) {
      /** @desc Error message when the user is not yet verified. */
      var MSG_UNNAMED_1871 = goog.getMsg(
          'Due to anti-money laundry international laws and government regulations, deposits/withdrawals in the local currency are only available to verified customers.{$break}We are very sorry for the inconvenience.',
          {'break': '<br/>'});
      output += '<div class="alert alert-warning text-left">' + MSG_UNNAMED_1871 + '</div>';
      if (opt_data.verificationLevel == 0) {
        /** @desc get verified message */
        var MSG_UNNAMED_1873 = goog.getMsg(' Verify your account ');
        output += '<a href="" data-switch-view="verification">' + MSG_UNNAMED_1873 + '</a>';
      }
    } else {
      /** @desc Error message when the brokers doesn't have deposit methods */
      var MSG_UNNAMED_1875 = goog.getMsg('We are not accepting deposits at this moment. We sorry for the inconvenience.');
      output += '<div class="alert alert-danger text-center">' + MSG_UNNAMED_1875 + '</div>';
    }
  }
  var methodList810 = opt_data.methods;
  var methodListLen810 = methodList810.length;
  for (var methodIndex810 = 0; methodIndex810 < methodListLen810; methodIndex810++) {
    var methodData810 = methodList810[methodIndex810];
    if (opt_data.force_method) {
      if (methodData810['method'] == opt_data.force_method) {
        if (opt_data.side == 'client') {
          /** @desc amount */
          var MSG_UNNAMED_1877 = goog.getMsg('Amount');
          output += '<div class="control-group"><label class="control-label">' + MSG_UNNAMED_1877 + '</label><div class="controls"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(methodData810['method']) + '_' + soy.$$escapeHtml(opt_data.amountID) + '" data-uniform-validators="required; validateNumber ' + ((methodData810['limits'][opt_data.verificationLevel]['enabled']) ? ' ' + ((methodData810['limits'][opt_data.verificationLevel]['min']) ? '; validateMin ' + soy.$$escapeHtml(methodData810['limits'][opt_data.verificationLevel]['formatted_min_value']) : '') + ((methodData810['limits'][opt_data.verificationLevel]['max']) ? '; validateMax ' + soy.$$escapeHtml(methodData810['limits'][opt_data.verificationLevel]['formatted_max_value']) + ' ' : '') + ' ' : '') + '" data-uniform-type="number" data-uniform-filters="positive_number" type="text" class="withdraw-field input-small" size="16" value="' + ((opt_data.formattedAmount) ? soy.$$escapeHtml(opt_data.formattedAmount) : '') + '" name="Amount"></div>';
          if (methodData810['limits'][opt_data.verificationLevel]['enabled']) {
            output += '<div><em><small>';
            if (methodData810['limits'][opt_data.verificationLevel]['max']) {
              /** @desc amount help block */
              var MSG_UNNAMED_1879 = goog.getMsg(
                  ' Available: {$xxx}',
                  {'xxx': soy.$$escapeHtml(methodData810['limits'][opt_data.verificationLevel]['formatted_max'])});
              output += MSG_UNNAMED_1879 + '<br>';
            }
            if (methodData810['limits'][opt_data.verificationLevel]['min']) {
              /** @desc amount help block */
              var MSG_UNNAMED_1881 = goog.getMsg(
                  ' Minimum: {$xxx} per transaction.  ',
                  {'xxx': soy.$$escapeHtml(methodData810['limits'][opt_data.verificationLevel]['formatted_min'])});
              output += MSG_UNNAMED_1881;
            }
            output += '</small></em></div>';
          }
          output += '</div></div>';
        }
        var fieldList864 = methodData810['fields'];
        var fieldListLen864 = fieldList864.length;
        for (var fieldIndex864 = 0; fieldIndex864 < fieldListLen864; fieldIndex864++) {
          var fieldData864 = fieldList864[fieldIndex864];
          output += (fieldData864['side'] == opt_data.side) ? '<div class="control-group"><label class="control-label">' + soy.$$escapeHtml(fieldData864['label']) + '</label><div class="controls"><input class="withdraw-field" data-uniform-validators="' + soy.$$escapeHtml(fieldData864['validator']) + '" type="' + soy.$$escapeHtml(fieldData864['type']) + '" name="' + soy.$$escapeHtml(fieldData864['name']) + '" label="' + soy.$$escapeHtml(fieldData864['placeholder']) + '" value="' + soy.$$escapeHtml(fieldData864['value']) + '"/></div></div>' : '';
        }
        if (opt_data.side == 'client') {
          /** @desc Fee percentage label */
          var MSG_UNNAMED_1883 = goog.getMsg('Fees:');
          /** @desc Net amount */
          var MSG_UNNAMED_1885 = goog.getMsg('Net amount');
          output += '<div class="control-group" style="margin-bottom: 5px;"><div class="controls"><label>' + soy.$$escapeHtml(methodData810['disclaimer']) + '</label><input id="' + soy.$$escapeHtml(methodData810['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData810['percent_fee']) + '"><input id="' + soy.$$escapeHtml(methodData810['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData810['fixed_fee']) + '"></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1883 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(methodData810['method']) + '_' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label" style="text-align: left;"></label></div></div><div class="control-group" ' + ((opt_data.hideNetAmount) ? ' style="display:none;" ' : '') + ' ><label class="control-label net-amount">' + MSG_UNNAMED_1885 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(methodData810['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label net-amount" style="text-align: left;"></label><input id="' + soy.$$escapeHtml(methodData810['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '_value" type="hidden" value=""><input id="' + soy.$$escapeHtml(methodData810['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '_validator" type="hidden" value="" data-uniform-validators="required; validateNumber ' + ((methodData810['limits'][opt_data.verificationLevel]['enabled']) ? ' ' + ((methodData810['limits'][opt_data.verificationLevel]['min']) ? '; validateMin ' + soy.$$escapeHtml(methodData810['limits'][opt_data.verificationLevel]['formatted_min_value']) : '') + ((methodData810['limits'][opt_data.verificationLevel]['max']) ? '; validateMax ' + soy.$$escapeHtml(methodData810['limits'][opt_data.verificationLevel]['formatted_max_value']) + ' ' : '') + ' ' : '') + '" data-uniform-type="number" class="withdraw-field" data-uniform-filters="positive_number"' + ((! (methodIndex810 == 0)) ? 'disabled' : '') + '></div></div>';
        } else {
          output += (opt_data.side == 'broker') ? '<div class="control-group" style="margin-bottom: 5px;"><div class="controls"><label>' + soy.$$escapeHtml(methodData810['disclaimer']) + '</label></div></div>' + ((opt_data.showFeeDataEntry) ? bitex.templates.FeesFormControls({currencySign: opt_data.currencySign, percentFeeID: methodData810['method'] + '_' + opt_data.percentFeeID, percentFee: methodData810['percent_fee'], fixedFeeID: methodData810['method'] + '_' + opt_data.fixedFeeID, fixedFee: methodData810['fixed_fee'], totalFeesID: methodData810['method'] + '_' + opt_data.totalFeesID, netValueID: methodData810['method'] + '_' + opt_data.netValueID}) : '') : '';
        }
      }
    } else {
      /** @desc Fee percentage label */
      var MSG_UNNAMED_1893 = goog.getMsg('Fees:');
      /** @desc Net amount */
      var MSG_UNNAMED_1895 = goog.getMsg('Net amount');
      output += '<div class="withdraw-method" data-withdraw-method="' + soy.$$escapeHtml(methodData810['method']) + '" style="' + ((! (methodIndex810 == 0)) ? 'display:none;' : '') + '" >';
      if (opt_data.side == 'client') {
        /** @desc amount */
        var MSG_UNNAMED_1887 = goog.getMsg('Amount');
        output += '<div class="control-group"><label class="control-label">' + MSG_UNNAMED_1887 + '</label><div class="controls"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(methodData810['method']) + '_' + soy.$$escapeHtml(opt_data.amountID) + '" data-uniform-validators="required; validateNumber ' + ((methodData810['limits'][opt_data.verificationLevel]['enabled']) ? ' ' + ((methodData810['limits'][opt_data.verificationLevel]['min']) ? '; validateMin ' + soy.$$escapeHtml(methodData810['limits'][opt_data.verificationLevel]['formatted_min_value']) : '') + ((methodData810['limits'][opt_data.verificationLevel]['max']) ? '; validateMax ' + soy.$$escapeHtml(methodData810['limits'][opt_data.verificationLevel]['formatted_max_value']) + ' ' : '') + ' ' : '') + '" data-uniform-type="number" data-uniform-filters="positive_number" value="' + ((opt_data.formattedAmount) ? soy.$$escapeHtml(opt_data.formattedAmount) : '') + '" type="text" class="withdraw-field input-small" size="16" name="Amount" ' + ((! (methodIndex810 == 0)) ? 'disabled' : '') + '></div>';
        if (methodData810['limits'][opt_data.verificationLevel]['enabled']) {
          output += '<div><em><small>';
          if (methodData810['limits'][opt_data.verificationLevel]['max']) {
            /** @desc amount help block */
            var MSG_UNNAMED_1889 = goog.getMsg(
                ' Available: {$xxx}',
                {'xxx': soy.$$escapeHtml(methodData810['limits'][opt_data.verificationLevel]['formatted_max'])});
            output += MSG_UNNAMED_1889 + '<br>';
          }
          if (methodData810['limits'][opt_data.verificationLevel]['min']) {
            /** @desc amount help block */
            var MSG_UNNAMED_1891 = goog.getMsg(
                ' Minimum: {$xxx} per transaction.  ',
                {'xxx': soy.$$escapeHtml(methodData810['limits'][opt_data.verificationLevel]['formatted_min'])});
            output += MSG_UNNAMED_1891;
          }
          output += '</small></em></div>';
        }
        output += '</div></div>';
      }
      output += '<div class="control-group" style="margin-bottom: 5px;"><div class="controls"><label>' + soy.$$escapeHtml(methodData810['disclaimer']) + '</label><input id="' + soy.$$escapeHtml(methodData810['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData810['percent_fee']) + '"><input id="' + soy.$$escapeHtml(methodData810['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData810['fixed_fee']) + '"></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1893 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(methodData810['method']) + '_' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label" style="text-align: left;"></label></div></div><div class="control-group" ' + ((opt_data.hideNetAmount) ? ' style="display:none;" ' : '') + '><label class="control-label net-amount">' + MSG_UNNAMED_1895 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(methodData810['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label net-amount broker-confirm-deposit-net-amount" style="text-align: left;"></label><input id="' + soy.$$escapeHtml(methodData810['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '_value" type="hidden" value=""><input id="' + soy.$$escapeHtml(methodData810['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '_validator" type="hidden" value="" data-uniform-validators="required; validateNumber ' + ((methodData810['limits'][opt_data.verificationLevel]['enabled']) ? ' ' + ((methodData810['limits'][opt_data.verificationLevel]['min']) ? '; validateMin ' + soy.$$escapeHtml(methodData810['limits'][opt_data.verificationLevel]['formatted_min_value']) : '') + ((methodData810['limits'][opt_data.verificationLevel]['max']) ? '; validateMax ' + soy.$$escapeHtml(methodData810['limits'][opt_data.verificationLevel]['formatted_max_value']) + ' ' : '') + ' ' : '') + '" data-uniform-type="number" class="withdraw-field" data-uniform-filters="positive_number"' + ((! (methodIndex810 == 0)) ? 'disabled' : '') + '></div></div>';
      var fieldList1078 = methodData810['fields'];
      var fieldListLen1078 = fieldList1078.length;
      for (var fieldIndex1078 = 0; fieldIndex1078 < fieldListLen1078; fieldIndex1078++) {
        var fieldData1078 = fieldList1078[fieldIndex1078];
        output += (fieldData1078['side'] == opt_data.side) ? '<div class="control-group"><label class="control-label">' + soy.$$escapeHtml(fieldData1078['label']) + '</label><div class="controls"><input class="withdraw-field" data-uniform-validators="' + soy.$$escapeHtml(fieldData1078['validator']) + '" type="' + soy.$$escapeHtml(fieldData1078['type']) + '" name="' + soy.$$escapeHtml(fieldData1078['name']) + '" label="' + soy.$$escapeHtml(fieldData1078['placeholder']) + '" value="' + soy.$$escapeHtml(fieldData1078['value']) + '"' + ((! (methodIndex810 == 0)) ? 'disabled' : '') + ' /></div></div>' : '';
      }
      output += '</div>';
    }
  }
  output += '</div><div class="control-group dlg-response-group"><label class="control-label dlg-response-group-label"></label><div class="controls" class="dlg-response-group-value" ></div></div></fieldset></form>';
  return output;
};


bitex.templates.YourFeesBalances = function(opt_data) {
  var output = '';
  /** @desc label for user buy fee */
  var MSG_UNNAMED_1897 = goog.getMsg('Buy Fee');
  /** @desc label for user sell fee */
  var MSG_UNNAMED_1901 = goog.getMsg('Sell Fee');
  output += '<table class="table table-striped table-condensed"><tbody><tr><td><strong>' + MSG_UNNAMED_1897 + '</strong></td><td><span class="bitex-model">';
  if (opt_data.buy_fee) {
    output += soy.$$escapeHtml(opt_data.buy_fee);
  } else {
    /** @desc Using broker fee data */
    var MSG_UNNAMED_1899 = goog.getMsg('-');
    output += MSG_UNNAMED_1899;
  }
  output += '</span></td></tr><tr><td><strong>' + MSG_UNNAMED_1901 + '</strong></td><td><span class="bitex-model">';
  if (opt_data.sell_fee) {
    output += soy.$$escapeHtml(opt_data.sell_fee);
  } else {
    /** @desc Using broker fee data */
    var MSG_UNNAMED_1903 = goog.getMsg('-');
    output += MSG_UNNAMED_1903;
  }
  output += '</span></td></tr></tbody></table>';
  return output;
};


bitex.templates.YourAccountBalances = function(opt_data) {
  var output = '<table class="table table-striped" style="width: 350px"><tbody>';
  var currencyList1126 = opt_data.currencies;
  var currencyListLen1126 = currencyList1126.length;
  for (var currencyIndex1126 = 0; currencyIndex1126 < currencyListLen1126; currencyIndex1126++) {
    var currencyData1126 = currencyList1126[currencyIndex1126];
    /** @desc label for available balance in a currency */
    var MSG_UNNAMED_1905 = goog.getMsg(
        'Available {$code}',
        {'code': soy.$$escapeHtml(currencyData1126.code)});
    output += '<tr><td><strong>' + MSG_UNNAMED_1905 + '</strong></td><td><span class="bitex-model" data-model-key="formatted_balance_' + soy.$$escapeHtml(currencyData1126.model_key) + '" data-blink-class="balance-info-blink">' + ((currencyData1126.balance) ? soy.$$escapeHtml(currencyData1126.balance) : '-') + '</span></td></tr>';
  }
  output += '</tbody></table>';
  return output;
};


bitex.templates.AccountOverviewHeaderVerified = function(opt_data) {
  var output = '';
  /** @desc label on  overview header */
  var MSG_UNNAMED_1907 = goog.getMsg('No');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1909 = goog.getMsg('Pending');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1911 = goog.getMsg('Progress');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1913 = goog.getMsg('Yes - Level I ');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1915 = goog.getMsg('Yes - Level II ');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1917 = goog.getMsg('Yes - Level III ');
  output += '<select id="id_select_new_verification_level" data-profile-change="Verified" ><option value=0 ' + ((opt_data.msg_customer_detail['Verified'] == 0) ? 'selected' : '') + '>' + MSG_UNNAMED_1907 + '</option><option value=1 ' + ((opt_data.msg_customer_detail['Verified'] == 1) ? 'selected' : '') + '>' + MSG_UNNAMED_1909 + '</option><option value=2 ' + ((opt_data.msg_customer_detail['Verified'] == 2) ? 'selected' : '') + '>' + MSG_UNNAMED_1911 + '</option><option value=3 ' + ((opt_data.msg_customer_detail['Verified'] == 3) ? 'selected' : '') + '>' + MSG_UNNAMED_1913 + '</option><option value=4 ' + ((opt_data.msg_customer_detail['Verified'] == 4) ? 'selected' : '') + '>' + MSG_UNNAMED_1915 + '</option><option value=5 ' + ((opt_data.msg_customer_detail['Verified'] == 5) ? 'selected' : '') + '>' + MSG_UNNAMED_1917 + '</option></select>';
  return output;
};


bitex.templates.AccountOverviewHeaderWithDrawEmailData = function(opt_data) {
  var output = '';
  if (opt_data.msg_customer_detail['NeedWithdrawEmail']) {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1919 = goog.getMsg('Enabled');
    /** @desc label on  overview header */
    var MSG_UNNAMED_1921 = goog.getMsg('Disable');
    output += '<span class="label label-success">' + MSG_UNNAMED_1919 + '</span> <a href="#" class="btn btn-primary btn-mini" data-action="SET_WITHDRAW_EMAIL" data-row="' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '">' + MSG_UNNAMED_1921 + '</a>';
  } else {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1923 = goog.getMsg('Disabled');
    /** @desc label on  overview header */
    var MSG_UNNAMED_1925 = goog.getMsg('Enabled');
    output += '<span class="label label-important">' + MSG_UNNAMED_1923 + '</span> <a href="#" class="btn btn-primary btn-mini" data-action="SET_WITHDRAW_EMAIL" data-row="' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '">' + MSG_UNNAMED_1925 + '</a>';
  }
  return output;
};


bitex.templates.AccountOverviewHeaderTwoFactors = function(opt_data) {
  var output = '';
  if (opt_data.msg_customer_detail['TwoFactorEnabled']) {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1927 = goog.getMsg('Enabled');
    /** @desc label on  overview header */
    var MSG_UNNAMED_1929 = goog.getMsg('Disable');
    output += '<span class="label label-success">' + MSG_UNNAMED_1927 + '</span><a href="#" class="btn btn-primary btn-mini" data-action="SET_TWO_FACTOR" data-row="' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '">' + MSG_UNNAMED_1929 + '</a>';
  } else {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1931 = goog.getMsg('Disabled');
    output += '<span class="label label-important">' + MSG_UNNAMED_1931 + '</span>';
  }
  return output;
};


bitex.templates.AccountOverviewHeader = function(opt_data) {
  var output = '';
  /** @desc label on overview header */
  var MSG_UNNAMED_1933 = goog.getMsg('ID');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1935 = goog.getMsg('Username');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1937 = goog.getMsg('Email');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1939 = goog.getMsg('State');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1941 = goog.getMsg('Country');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1943 = goog.getMsg('Last login');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1945 = goog.getMsg('Is verified');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1947 = goog.getMsg('Has two step authentication');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1949 = goog.getMsg('Registration date');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1951 = goog.getMsg('Needs email confirmation on withdraw');
  output += '<table class="table table-striped table-condensed account-overview-table" style="width: 350px"><tbody><tr><td><strong>' + MSG_UNNAMED_1933 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1935 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Username']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1937 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Email']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1939 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['State']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1941 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['CountryCode']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1943 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['LastLogin']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1945 + '</strong></td><td class="account-overview-val account-overview-verified">' + bitex.templates.AccountOverviewHeaderVerified(opt_data) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1947 + '</strong></td><td class="account-overview-val account-overview-two-factors" >' + bitex.templates.AccountOverviewHeaderTwoFactors(opt_data) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1949 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Created']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1951 + '</strong></td><td class="account-overview-val account-overview-withdraw-email">' + bitex.templates.AccountOverviewHeaderWithDrawEmailData(opt_data) + '</td></tr></tbody></table>';
  return output;
};


bitex.templates.AccountOverviewUser = function(opt_data) {
  var output = '';
  /** @desc label on overview header */
  var MSG_UNNAMED_1953 = goog.getMsg('ID');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1955 = goog.getMsg('Username');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1957 = goog.getMsg('Email');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1959 = goog.getMsg('State');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1961 = goog.getMsg('Country');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1963 = goog.getMsg('Is verified');
  output += '<table class="table table-striped table-condensed account-overview-table" style="width: 350px"><tbody><tr><td><strong>' + MSG_UNNAMED_1953 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1955 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Username']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1957 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Email']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1959 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['State']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1961 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['CountryCode']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1963 + '</strong></td><td class="account-overview-val account-overview-verified">';
  switch (opt_data.msg_customer_detail['Verified']) {
    case 0:
      /** @desc label on  overview header */
      var MSG_UNNAMED_1965 = goog.getMsg('No');
      output += '<span class="label label-important">' + MSG_UNNAMED_1965 + '</span>';
      break;
    case 1:
      /** @desc label on  overview header */
      var MSG_UNNAMED_1967 = goog.getMsg('Pending');
      output += '<span class="label label-important">' + MSG_UNNAMED_1967 + '</span>';
      break;
    case 2:
      /** @desc label on  overview header */
      var MSG_UNNAMED_1969 = goog.getMsg('Yes');
      output += '<span class="label label-success">' + MSG_UNNAMED_1969 + '</span>';
      break;
    case 3:
      /** @desc label on  overview header */
      var MSG_UNNAMED_1971 = goog.getMsg('Yes - Level II');
      output += '<span class="label label-success">' + MSG_UNNAMED_1971 + '</span>';
      break;
    case 4:
      /** @desc label on  overview header */
      var MSG_UNNAMED_1973 = goog.getMsg('Yes - Level III');
      output += '<span class="label label-success">' + MSG_UNNAMED_1973 + '</span>';
      break;
    case 5:
      /** @desc label on  overview header */
      var MSG_UNNAMED_1975 = goog.getMsg('Yes - Level IV');
      output += '<span class="label label-success">' + MSG_UNNAMED_1975 + '</span>';
      break;
  }
  output += '</td></tr></tbody></table>';
  return output;
};


bitex.templates.EnterVerificationDataDialogContent = function(opt_data) {
  var output = '';
  /** @desc label on  overview header */
  var MSG_UNNAMED_1977 = goog.getMsg('Verification data');
  output += '<form class="form-horizontal" data-deposit-status="prepare"><input type="hidden" name="ClientID" value="' + soy.$$escapeHtml(opt_data.clientID) + '"><div class="control-group"><label class="control-label"> ' + MSG_UNNAMED_1977 + ' </label><div class="controls"><input type="text" class="input-xlarge" size="16" name="VerificationData"></div></div></form>';
  return output;
};


bitex.templates.OrderEntry = function(opt_data) {
  var output = '';
  /** @desc Amount label in Order Entry */
  var MSG_UNNAMED_1979 = goog.getMsg('Amount:');
  /** @desc 'Price per label' in Order Entry */
  var MSG_UNNAMED_1981 = goog.getMsg('Price per ');
  /** @desc Total label in Order Entry */
  var MSG_UNNAMED_1983 = goog.getMsg('Total:');
  /** @desc 'Fee (optional):' label in Order Entry */
  var MSG_UNNAMED_1985 = goog.getMsg('Fee (optional):');
  /** @desc 'Client ID' label in Order Entry */
  var MSG_UNNAMED_1987 = goog.getMsg('Client ID');
  output += '<div id="' + soy.$$escapeHtml(opt_data.id) + '" class="well span6 order-entry"><input type="hidden" name="symbol" class="order-entry-symbol" value="' + soy.$$escapeHtml(opt_data.symbol) + '"><input type="hidden" name="side" class="order-entry-side" value="' + soy.$$escapeHtml(opt_data.side) + '"><input type="hidden" name="type" class="order-entry-type" value="' + soy.$$escapeHtml(opt_data.type) + '"><input type="hidden" name="broker_id" class="order-entry-broker-id" value="' + soy.$$escapeHtml(opt_data.broker_id) + '"><div class="row-fluid"><div class="span5 order-entry-label"> <span>' + MSG_UNNAMED_1979 + '</span></div><div class="span6"><div class="input-prepend input-block-level order-entry-data"><span class="add-on order-entry-amount-sign">฿</span><input class="input-block-level order-entry-amount" type="text" value="" required/></div></div></div><div class="row-fluid"><div class="span5 order-entry-label"> <span>' + MSG_UNNAMED_1981 + '<span class="order-entry-amount-sign">฿</span>:</span></div><div class="span6"><div class="input-prepend input-block-level order-entry-data"><span class="add-on order-entry-price-sign">$</span><input class="input-block-level order-entry-price" type="text" required/></div></div></div><div class="row-fluid"><div class="span5 order-entry-label"><span>' + MSG_UNNAMED_1983 + '</span></div><div class="span6"><div class="input-prepend input-block-level order-entry-data"><span class="add-on order-entry-price-sign">$</span><input class="input-block-level order-entry-total" type="text" required/></div></div></div><div class="row-fluid" ' + ((opt_data.hide_fee) ? 'style="display: none;"' : '') + ' ><div class="span5 order-entry-label"> <span>' + MSG_UNNAMED_1985 + '</span></div><div class="span6"><div class="input-prepend input-block-level order-entry-data"><span class="add-on order-entry-amount-sign">฿</span><input class="input-block-level order-entry-fee" type="text" value="0" /></div></div></div><div class="row-fluid"><div class="span5"><input class="input-block-level order-entry-client-id" label="' + MSG_UNNAMED_1987 + '" ' + ((opt_data.hide_client_id) ? 'style="display:none"' : '') + ' /></div><div class="span5"><button class="btn ' + ((opt_data.side == 1) ? 'btn-success' : 'btn-danger') + ' btn-execution order-entry-action">';
  if (opt_data.side == 1) {
    /** @desc Buy button in Order Entry */
    var MSG_UNNAMED_1989 = goog.getMsg('BUY');
    output += MSG_UNNAMED_1989;
  } else {
    /** @desc Sell button in Order Entry */
    var MSG_UNNAMED_1991 = goog.getMsg('SELL');
    output += MSG_UNNAMED_1991;
  }
  output += '</button></div></div></div>';
  return output;
};


bitex.templates.DataGrid = function(opt_data) {
  var output = '<div ' + ((opt_data.id) ? 'id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + '  class="fuelux ' + ((opt_data.base_class) ? soy.$$escapeHtml(opt_data.base_class) : '') + '" style="width:100%;"><table class="table table-bordered datagrid datagrid-stretch-header"><thead><tr><th colspan="4" ' + ((! opt_data.title && ! opt_data.show_search) ? 'style="display: none;"' : '') + '><span class="datagrid-header-title"  ' + ((! opt_data.title) ? 'style="display: none;"' : '') + ' ><strong>' + soy.$$escapeHtml(opt_data.title) + '</strong></span><div class="datagrid-header-left" ' + ((! opt_data.show_search) ? 'style="display: none;"' : '') + '><div class="input-append search datagrid-search"><input type="text" class="input-medium" placeholder="' + soy.$$escapeHtml(opt_data.search_placeholder) + '"><button type="button" class="btn"><i class="icon-search"></i></button></div></div><div class="datagrid-header-right">';
  if (opt_data.button_filters) {
    output += '<div class="select filter datagrid-filter" data-resize="auto"><button type="button" data-toggle="dropdown" class="btn dropdown-toggle">';
    var buttonList1430 = opt_data.button_filters;
    var buttonListLen1430 = buttonList1430.length;
    for (var buttonIndex1430 = 0; buttonIndex1430 < buttonListLen1430; buttonIndex1430++) {
      var buttonData1430 = buttonList1430[buttonIndex1430];
      output += (buttonIndex1430 == 0) ? '<span class="dropdown-label" style="width: 111px;">' + soy.$$escapeHtml(buttonData1430['label']) + '</span>' : '';
    }
    output += '<span class="caret"></span></button><ul class="dropdown-menu">';
    var buttonList1438 = opt_data.button_filters;
    var buttonListLen1438 = buttonList1438.length;
    for (var buttonIndex1438 = 0; buttonIndex1438 < buttonListLen1438; buttonIndex1438++) {
      var buttonData1438 = buttonList1438[buttonIndex1438];
      output += '<li data-value="' + soy.$$escapeHtml(buttonData1438['value']) + '"><a href="#">' + soy.$$escapeHtml(buttonData1438['label']) + '</a></li>';
    }
    output += '</ul></div>';
  }
  output += '</div></th></tr></thead></table><div class="datagrid-stretch-wrapper" style="height:' + ((opt_data.wrapper_height) ? soy.$$escapeHtml(opt_data.wrapper_height) : '360') + 'px;"><table class="table table-bordered datagrid"><tbody></tbody></table></div><table class="table table-bordered datagrid datagrid-stretch-footer"><tfoot><tr><th colspan="4"><div class="datagrid-footer-left" style="visibility: visible;"><div class="grid-controls"><span><span class="grid-start"></span> -<span class="grid-end"></span></span></div></div><div class="datagrid-footer-right" style="visibility: visible;"><div class="grid-pager"><button type="button" class="btn grid-prevpage"><i class="icon-chevron-left"></i></button><button type="button" class="btn grid-nextpage"><i class="icon-chevron-right"></i></button></div></div></th></tr></tfoot></table></div>';
  return output;
};
