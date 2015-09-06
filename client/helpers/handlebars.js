var DateFormats = {
    short: "DD MMMM - YYYY",
    long: "dddd DD.MM.YYYY HH:mm"
};

UI.registerHelper("formatDate", function (context, options) {
    if (moment && context) {
        return moment(context).fromNow();
    } else {
        return context;
    }
});

UI.registerHelper("lblLink", function (key) {
    return LinksSchema.label(key);
});

UI.registerHelper("displayTags", function (tags) {
    var tagString = "";
    _.each(tags, function (object, index) {
        tagString += "<span class='label label-primary'>" + object + "</span>";
    });
    return tagString;
});

UI.registerHelper('setColorAlpha', function (hexColor) {
    var color = tinycolor(hexColor || "#fff");
    return color.setAlpha(.5);
});
