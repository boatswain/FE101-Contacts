var cards_list = [
    {
        name : 'Amar',
        email : 'amardeep@live.com',
        phone : '713-555-8200',
        address : '3715 Ferris Ave - ',
        city: 'Houston, TX 77005',
        image : 'https://mail.google.com/mail/c/u/0/photos/public/AIbEiAIAAABDCJPq8pH93c3eaCILdmNhcmRfcGhvdG8qKGFhN2ZhYzNiYjI5ZDVmZjc4MjhkMjgyMzRkNmJmNjI5OTM0ZDk0MDMwAfC-yZ9IS2Ut84BHSSVBxXexvvD6?sz=64'
    },
    {
        name : 'Deepa',
        email : 'deepa@yahoo.com',
        phone : '408-555-1234',
        address : '3715 Ferris Ave -',
        city: 'Houston, TX 77005',
        image : 'https://mail.google.com/mail/c/u/0/photos/public/AIbEiAIAAABDCJPq8pH93c3eaCILdmNhcmRfcGhvdG8qKGFhN2ZhYzNiYjI5ZDVmZjc4MjhkMjgyMzRkNmJmNjI5OTM0ZDk0MDMwAfC-yZ9IS2Ut84BHSSVBxXexvvD6?sz=64'
    },
    {
        name : 'Eric',
        email : 'eric@ericrules.com',
        phone : '408-555-1234',
        address : '10 Candyland',
        city: 'Houston, TX 77005',
        image : 'https://mail.google.com/mail/c/u/0/photos/public/AIbEiAIAAABDCJPq8pH93c3eaCILdmNhcmRfcGhvdG8qKGFhN2ZhYzNiYjI5ZDVmZjc4MjhkMjgyMzRkNmJmNjI5OTM0ZDk0MDMwAfC-yZ9IS2Ut84BHSSVBxXexvvD6?sz=64'
    },
    {
        name : 'Gregor',
        email : 'gregor@gmail.com',
        phone : '897-984-3145',
        address : 'Gregor Insurance Co.',
        city: 'Houston, TX 77005',
        image : 'https://mail.google.com/mail/c/u/0/photos/public/AIbEiAIAAABDCJPq8pH93c3eaCILdmNhcmRfcGhvdG8qKGFhN2ZhYzNiYjI5ZDVmZjc4MjhkMjgyMzRkNmJmNjI5OTM0ZDk0MDMwAfC-yZ9IS2Ut84BHSSVBxXexvvD6?sz=64'
    },
    {
        name : 'Jeff',
        email : 'jeff@aol.com',
        phone : '408-555-1234',
        address : '1234 Montcalm St.       Chula Vista     CA  91911',
        city: 'Houston, TX 77005',
        image : 'https://mail.google.com/mail/c/u/0/photos/public/AIbEiAIAAABDCJPq8pH93c3eaCILdmNhcmRfcGhvdG8qKGFhN2ZhYzNiYjI5ZDVmZjc4MjhkMjgyMzRkNmJmNjI5OTM0ZDk0MDMwAfC-yZ9IS2Ut84BHSSVBxXexvvD6?sz=64'
    },
    {
        name : 'Jen',
        email : 'jen@ebay.com',
        phone : '408-555-1234',
        address : '1234 Lily St.       San Diego   CA  91911',
        city: 'Houston, TX 77005',
        image : 'https://mail.google.com/mail/c/u/0/photos/public/AIbEiAIAAABDCJPq8pH93c3eaCILdmNhcmRfcGhvdG8qKGFhN2ZhYzNiYjI5ZDVmZjc4MjhkMjgyMzRkNmJmNjI5OTM0ZDk0MDMwAfC-yZ9IS2Ut84BHSSVBxXexvvD6?sz=64'
    },
    {
        name : 'Katie',
        email : 'katie@ask.com',
        phone : '415-555-1234',
        address : '949 Thunk Ct.       Sacramento  CA  95826',
        city: 'Houston, TX 77005',
        image : 'https://mail.google.com/mail/c/u/0/photos/public/AIbEiAIAAABDCJPq8pH93c3eaCILdmNhcmRfcGhvdG8qKGFhN2ZhYzNiYjI5ZDVmZjc4MjhkMjgyMzRkNmJmNjI5OTM0ZDk0MDMwAfC-yZ9IS2Ut84BHSSVBxXexvvD6?sz=64'
    },
    {
        name : 'Vivian',
        email : 'vivian@altavista.com',
        phone : '650-458-1234',
        address : '949 FooBar St.      San Mateo   CA  98745',
        city: 'Houston, TX 77005',
        image : 'https://mail.google.com/mail/c/u/0/photos/public/AIbEiAIAAABDCJPq8pH93c3eaCILdmNhcmRfcGhvdG8qKGFhN2ZhYzNiYjI5ZDVmZjc4MjhkMjgyMzRkNmJmNjI5OTM0ZDk0MDMwAfC-yZ9IS2Ut84BHSSVBxXexvvD6?sz=64'
    }
];
var tidyCardInfo = function(idx){
    var card = cards_list[idx];
    var ret = $('<li>').attr('id', idx);
    var info = $('<span>').addClass('card-info');
    var name = $('<span>').addClass('name').text(card.name);
    var card_detail = $('<ul>').addClass('card-detail');
    var email_address = $('<a>').attr('href','mailto:' + card.email).text(card.email);
    var email = $('<li>').addClass('email').html(email_address);
    var phone = $('<li>').addClass('phone').text(card.phone);
    var address = $('<li>').addClass('address').html(card.address + '<a href="#">map</a>');
    var city = $('<li>').addClass('city').text(card.city);
    var image = $('<li>').addClass('image').html($('<img>').attr('src',card.image));
    var contact_method = $('<li>').addClass('contact_method').html('<a href="#">Chats</a> - <a href="#">Emails</a>');
    var selected = $('<a>').attr('href', 'mailto:' + card.email).addClass('selected').text(card.email);
    card_detail.append(email);
    card_detail.append(phone);
    card_detail.append(address);
    card_detail.append(city);
    card_detail.append(contact_method);
    card_detail.append(image);
    info.append(name);
    info.append(card_detail);
    ret.append(info);
    ret.append(selected);
    return ret;
}
var initCardsList = function() {
    for (i in cards_list) {
        $('#cards').append(tidyCardInfo(i));
    }
}

var showSelectItem = function() {
    if ($('select option:selected').val() === 'phone') {
        $('.selected').remove();
        $('#cards > li').each( function() {
            var content = $(this).find('.phone').html();
            $(this).append($('<a>').attr('href', '#').addClass('selected').text(content));
        });
    } else if ($('select option:selected').val() === 'email') {
        $('.selected').remove();    
        $('#cards > li').each( function() {
            var content = $(this).find('.email a').html();
            $(this).append($('<a>').attr('href', 'mailto:' + content).addClass('selected').text(content));
        })
    }
}
var showDetailInfo = function() {
    var info = $(this).siblings('.card-detail');
    var h = $('.contacts').offset().top + $('.contacts').height() - info.offset().top - info.height();
    if (h < 0) {
        info.css('top', h - 10);
    }
}
$(document).ready(function() {
    initCardsList();
    $('#select').on('change', showSelectItem);
    $('.card-info').on('mouseover','.name', showDetailInfo);
});