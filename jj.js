$dc.loadHomePage = function () {
    // Load home snippet page
    $ajaxUtils.sendGetRequest(
      homeHtmlUrl,
      function (homeHtml) {
        // Load menu categories
        $ajaxUtils.sendGetRequest(
          allCategoriesUrl,
          function (categories) {
            // Choose a random category
            var randomCategory = chooseRandomCategory(categories);
            // Insert random category short_name into the home HTML
            var homeHtmlToInsertIntoMainPage = insertProperty(
              homeHtml,
              "randomCategoryShortName",
              "'" + randomCategory.short_name + "'"
            );
            // Insert the modified HTML into the main content
            insertHtml("#main-content", homeHtmlToInsertIntoMainPage);
          },
          true // JSON response
        );
      },
      false // Not JSON
    );
  };
  