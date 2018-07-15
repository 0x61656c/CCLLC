// Accordion
var accordionItem = $('.accordion__item'),
    accordionInput = accordionItem.find('input');

accordionInput.on('click', function () {
    var el = $(this),
        elWrap = el.parent(),
        elWrapWrap = elWrap.parent(),
        elArticle = elWrap.find('article'),
        anotherArticle = elWrapWrap.find('article'),
        elText = elArticle.find('p').innerHeight();

    anotherArticle.css('height', '0');
    elArticle.css('height', elText);
    })