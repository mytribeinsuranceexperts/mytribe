$(document).ready(function () {
  var components = $('[data-component-embed="CTA"]');

  components.each(function () {
    var type = $(this).attr("data-component-type");
    if (type == "Quote") {
      var category = $(this).attr("data-component-category");
      var variation = $(this).attr("data-component-variation");

      const quoteCtaMapping = {
        "Health Insurance 1": {
          heading: `"I saved £600 per month"`,
          paragraph:
            "A knowledgeable and competent agent dealt with my health insurance needs. She saved me £600 per month by finding a quote more suited to my needs and budget than my previous company.",
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-health-insurance",
          buttonColor: "green",
          reviews: {
            review1: {
              name: "Janet Cockerill",
              "review heading": `"I saved £600 per month"`,
              review:
                "A knowledgeable and competent agent dealt with my health insurance needs. She saved me £600 per month by finding a quote more suited to my needs and budget than my previous company",
              description: "Rated Excellent 5/5 on Google Review",
            },
          },
        },
        "Health Insurance 2": {
          heading: "Health insurance insights you can trust!",
          paragraph:
            "We’re the UK’s trusted insurance and healthcare resource, rated ‘Excellent’ on Google Reviews.",
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-health-insurance",
          buttonColor: "yellow",
          reviews: {
            review1: {
              name: "Joey Mort",
              "review heading": "",
              review: `"Clear and concise information. Very helpfulI in helping us find an affordable health insurance premium for our family"`,
              description: "Rated Excellent 5/5 on Google Review",
            },
            review2: {
              name: "Jeannie Cherry",
              "review heading": ` "Fast, friendly and very efficient"`,
              review: `"I would recommend using this service to anybody in need of insurance option comparisons. Fast, friendly and very efficient, individualised service."`,
              description: "Rated Excellent 5/5 on Google Review",
            },
          },
        },
        "Life Insurance 1": {
          heading: "",
          paragraph: "",
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-life-insurance",
          buttonColor: "green",
          reviews: {
            review1: {
              name: "Jeannie Cherry",
              "review heading": ` "Fast, friendly and very efficient"`,
              review: `"I would recommend using this service to anybody in need of insurance option comparisons. Fast, friendly and very efficient, individualised service."`,
              description: "Rated Excellent 5/5 on Google Review",
            },
          },
        },
        "Life Insurance 2": {
          heading: "Life insurance insights you can trust!",
          paragraph:
            "We’re the UK’s trusted insurance and healthcare resource, rated ‘Excellent’ on Google Reviews.",
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-life-insurance",
          buttonColor: "yellow",
          reviews: {
            review1: {
              name: "Jeannie Cherry",
              "review heading": ` "Fast, friendly and very efficient"`,
              review: `"I would recommend using this service to anybody in need of insurance option comparisons. Fast, friendly and very efficient, individualised service."`,
              description: "Rated Excellent 5/5 on Google Review",
            },
            review2: {
              name: "Chris Cox",
              "review heading": "",
              review: `"Very efficient and friendly service, the gentleman talked me through various options, very knowledgeable. A fantastic service."`,
              description: "Rated Excellent 5/5 on Google Review",
            },
          },
        },
      };

      var componentName = category + " " + variation;

      var heading = quoteCtaMapping[componentName].heading;
      var paragraph = quoteCtaMapping[componentName].paragraph;
      var buttonText = quoteCtaMapping[componentName].buttonText;
      var buttonUrl = quoteCtaMapping[componentName].buttonUrl;
      var buttonColor = quoteCtaMapping[componentName].buttonColor;

      console.log("Selected Component Name is: " + componentName);

      var newHTML = "";
      var headingCode = "";

      if (heading) {
        headingCode = `<h2 class="cta-custom-heading smaller">${heading}</h2>`;
      }

      if (variation == "1") {
        var paragraphCode = "";

        if (paragraph) {
          paragraphCode = `<blockquote class="quote-cta_quote">${paragraph}</blockquote>`;
        }

        var review1Name =
          quoteCtaMapping[componentName].reviews["review1"].name;
        var review1Description =
          quoteCtaMapping[componentName].reviews["review1"].description;

        newHTML = `
        <div class="quote-cta_wrapper">
            <div class="simple-cta_background-color yellow"></div>
            <img src="https://cdn.prod.website-files.com/60a0cd9e83c3b8a9bf15f80e/6674117958f5d4e09dd18ca2_mytribe-email-sig-bg.svg" loading="lazy" width="203" height="150" alt="" class="simple-cta_background-image">
            <div class="quote-cta_component">
            <img src="https://cdn.prod.website-files.com/60a0cd9e83c3b8a9bf15f80e/66f406a34e7af4f6069129a8_yellow%20review%20stars.svg" loading="lazy" width="300" height="51" alt="myTribe is rated excellent, 5 star reviews." class="in-content-review-stars">
            ${headingCode}
            ${paragraphCode}
            <div class="quote-cta_details">
                <div><strong>${review1Name}<br></strong>${review1Description}</div>
                <div class="in-content-review-google"><img src="https://cdn.prod.website-files.com/60a0cd9e83c3b8a9bf15f80e/60a50a62d53771540c8d30e8_google%20rating%20mytribe.svg" loading="lazy" alt="Google reviews rating
                    " class="quote-cta_icon"></div>
            </div>
            <a href="${buttonUrl}" class="button w-button ${buttonColor}">${buttonText}</a>
            </div>
        </div>
        `;
      } else if (variation == "2") {
        var review1Name =
          quoteCtaMapping[componentName].reviews["review1"].name;
        var review1Review =
          quoteCtaMapping[componentName].reviews["review1"].review;
        var review1Description =
          quoteCtaMapping[componentName].reviews["review1"].description;

        var review2Name =
          quoteCtaMapping[componentName].reviews["review2"].name;
        var review2Review =
          quoteCtaMapping[componentName].reviews["review2"].review;
        var review2Description =
          quoteCtaMapping[componentName].reviews["review2"].description;

        newHTML = `
        <div class="quote2-cta_wrapper">
            <img src="https://cdn.prod.website-files.com/60a0cd9e83c3b8a9bf15f80e/66f406a34e7af4f6069129a8_yellow%20review%20stars.svg" loading="lazy" alt="myTribe is rated excellent, 5 star reviews." class="in-content-review-stars large">
            ${headingCode}
            <p class="text-size-medium no-margin">${paragraph}</p>
            <div class="quote2-cta_reviews">
                <div class="quote2-cta_card">
                    <div class="review-text---medium">${review1Review}</div>
                    <div class="quote-cta_details">
                        <div class="small-text"><strong>${review1Name}</strong><br>${review1Description}</div>
                        <div class="in-content-review-google"><img src="https://cdn.prod.website-files.com/60a0cd9e83c3b8a9bf15f80e/60a50a62d53771540c8d30e8_google%20rating%20mytribe.svg" loading="lazy" alt="Google reviews rating
                        " class="quote-cta_icon"></div>
                    </div>
                </div>
                <div class="quote2-cta_card">
                    <div class="review-text---medium">${review2Review}</div>
                    <div class="quote-cta_details">
                    <div class="small-text"><strong>${review2Name}</strong><br>${review2Description}</div>
                        <div class="in-content-review-google"><img src="https://cdn.prod.website-files.com/60a0cd9e83c3b8a9bf15f80e/60a50a62d53771540c8d30e8_google%20rating%20mytribe.svg" loading="lazy" alt="Google reviews rating
                        " class="quote-cta_icon"></div>
                    </div>
                </div>
            </div>
            <a href="${buttonUrl}" class="button ${buttonColor} w-button">${buttonText}</a>
            </div>
        `;
      }

      $(this).html(newHTML);
    }
  });
});
