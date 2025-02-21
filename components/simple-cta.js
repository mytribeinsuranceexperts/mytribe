$(document).ready(function () {
  var components = $('[data-component-embed="CTA"]');

  components.each(function () {
    var type = $(this).attr("data-component-type");
    var category = $(this).attr("data-component-category");
    var variation = $(this).attr("data-component-variation");

      const simpleCtaMapping = {
        "Health Insurance 1": {
          heading: "Find the best health insurance for you!",
          paragraph:
            "Compare the UK's leading health insurance providers and get expert advice from an experienced insurance specialist.",
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-health-insurance",
          graphics: "",
          backgroundColor: "beige",
          buttonColor: "green",
        },
        "Health Insurance 2": {
          heading: "Compare Private Health Insurance",
          paragraph:
            "Compare the UK's leading health insurance providers and get expert advice from an experienced insurance specialist.",
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-health-insurance",
          graphics: "",
          backgroundColor: "yellow",
          buttonColor: "green",
        },
        "Income Protection 1": {
          heading: "Find the best income protection insurance for you!",
          paragraph:
            "Compare the UK's leading income protection insurance providers and get expert advice from an experienced insurance specialist.",
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-income-protection-insurance",
          graphics: "",
          backgroundColor: "beige",
          buttonColor: "green",
        },
        "Income Protection 2": {
          heading: "Compare Income Protection Insurance",
          paragraph:
            "Compare the UK's leading income protection insurance providers and get expert advice from an experienced insurance specialist.",
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-income-protection-insurance",
          graphics: "",
          backgroundColor: "yellow",
          buttonColor: "green",
        },
        "Life Insurance 1": {
          heading: "Find the best life insurance for you!",
          paragraph:
            "Compare the UK's leading life insurance providers and get expert advice from an experienced insurance specialist.",
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-life-insurance",
          graphics: "",
          backgroundColor: "beige",
          buttonColor: "green",
        },
        "Life Insurance 2": {
          heading: "Compare Life Health Insurance",
          paragraph:
            "Compare the UK's leading life insurance providers and get expert advice from an experienced insurance specialist.",
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-life-insurance",
          graphics: "",
          backgroundColor: "yellow",
          buttonColor: "green",
        },
        "Private Healthcare 1": {
          heading: "Get private surgery in as little as 4 weeks",
          paragraph:
            "Choose Wellsoon and get back to what matters most to you.",
          buttonText: "Request Quote",
          buttonUrl:
            "https://practiceplusgroup.com/landing-page/wellsoon-mytribe/",
          graphics: "Wellsoon Logo",
          backgroundColor: "beige",
          buttonColor: "green",
        },
        "Relevant Life Insurance 1": {
          heading: "Find the best relevant life insurance for you!",
          paragraph:
            "Compare the UK's leading relevant life insurance providers and get expert advice from an experienced insurance specialist.",
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-relevant-life-insurance",
          graphics: "",
          backgroundColor: "beige",
          buttonColor: "green",
        },
        "Relevant Life Insurance 2": {
          heading: "Compare Relevant Life Insurance",
          paragraph:
            "Compare the UK's leading relevant life insurance providers and get expert advice from an experienced insurance specialist.",
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-relevant-life-insurance",
          graphics: "",
          backgroundColor: "yellow",
          buttonColor: "green",
        },
        BLANK: {
          heading: "",
          paragraph: "",
          buttonText: "",
          buttonUrl: "",
          graphics: "",
          backgroundColor: "",
          buttonColor: "",
        },
      };

      var componentName = category + " " + variation;

      var heading = simpleCtaMapping[componentName].heading;
      var paragraph = simpleCtaMapping[componentName].paragraph;
      var buttonText = simpleCtaMapping[componentName].buttonText;
      var buttonUrl = simpleCtaMapping[componentName].buttonUrl;
      var graphics = simpleCtaMapping[componentName].graphics;
      var backgroundColor = simpleCtaMapping[componentName].backgroundColor;
      var buttonColor = simpleCtaMapping[componentName].buttonColor;

      console.log("Selected Component Name is: " + componentName);

      var graphicsCode = "";
      var graphicsAdjustment = "";
      var reviewsCode = "";
      var starsColor = "";

      //Adds graphic and adjusts accordingly
      if (graphics) {
        if (graphics == "Wellsoon Logo") {
          graphicsCode = `
          <div class="simple-cta_corner">
            <div>in partnership with</div>
            <img src="https://cdn.prod.website-files.com/60a0cd9e83c3b8a9bf15f80e/66d848867859f2219fb54220_practice%20plus-%20wellsoon%20logo.png" loading="lazy" alt="Wellsoon from Practice Plus Group Logo" class="simple-cta_corner-image">
          </div>
          `;
          graphicsAdjustment = "wellsoon";
        }
      }

      //Shows google reviews and adjusts star colors
      if (graphics) {
        reviewsCode = "";
      } else {
        if (backgroundColor == "beige") {
          starsColor = "yellow";
        } else if (backgroundColor == "yellow") {
          starsColor = "black";
        }

        reviewsCode = `
        <div class="simple-cta_rating">
              <p class="no-margin">Rated Excellent</p>
              <div class="simple-cta_rating-stars ${starsColor}">
                <div class="star-div"><img loading="lazy" src="https://cdn.prod.website-files.com/60a0cd9e83c3b8a9bf15f80e/60a50a5e74891b519fa714f5_google%20rating%20star.svg" alt="Google Review Star icon" class="google-star"></div>
                <div class="star-div"><img loading="lazy" src="https://cdn.prod.website-files.com/60a0cd9e83c3b8a9bf15f80e/60a50a5e74891b519fa714f5_google%20rating%20star.svg" alt="Google Review Star icon" class="google-star"></div>
                <div class="star-div"><img loading="lazy" src="https://cdn.prod.website-files.com/60a0cd9e83c3b8a9bf15f80e/60a50a5e74891b519fa714f5_google%20rating%20star.svg" alt="Google Review Star icon" class="google-star"></div>
                <div class="star-div"><img loading="lazy" src="https://cdn.prod.website-files.com/60a0cd9e83c3b8a9bf15f80e/60a50a5e74891b519fa714f5_google%20rating%20star.svg" alt="Google Review Star icon" class="google-star"></div>
                <div class="star-div"><img loading="lazy" src="https://cdn.prod.website-files.com/60a0cd9e83c3b8a9bf15f80e/60a50a5e74891b519fa714f5_google%20rating%20star.svg" alt="Google Review Star icon" class="google-star"></div>
              </div>
              <p class="no-margin">on</p>
              <img width="80" loading="lazy" alt="Google logo" src="https://cdn.prod.website-files.com/60a0cd9e83c3b8a9bf15f80e/60a50b106c627b555f5c4354_google%20logo.svg" class="simple-cta_rating-google">
          </div>
        `;
      }

      const newHTML = `
      <div class="simple-cta_wrapper">
      <div class="simple-cta_background-color ${backgroundColor}"></div>
      <img src="https://cdn.prod.website-files.com/60a0cd9e83c3b8a9bf15f80e/6674117958f5d4e09dd18ca2_mytribe-email-sig-bg.svg" loading="lazy" width="203" height="150" alt="" class="simple-cta_background-image">
      <div class="simple-cta_top ${graphicsAdjustment}">
         <h2 class="cta-custom-heading simple">${heading}</h2>
      </div>
      <div class="simple-cta_p ${graphicsAdjustment}">
         <p class="text-size-medium no-margin">${paragraph}</p>
      </div>
      <div class="simple-cta_left">
        ${reviewsCode}
      </div>
      <div class="simple-cta_right ${buttonColor}">
        <a href="${buttonUrl}" class="button simple-cta w-button">${buttonText}</a>
      </div>
      ${graphicsCode}
   </div>
      `;

      $(this).html(newHTML);
  });
});
