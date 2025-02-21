$(document).ready(function () {
  var components = $('[data-component-embed="CTA"]');

  components.each(function () {
    var type = $(this).attr("data-component-type");
    if (type == "Provider") {
      var category = $(this).attr("data-component-category");
      var variation = $(this).attr("data-component-variation");

      const providerCtaMapping = {
        "Health Insurance 1": {
          heading: "Compare plans from the UK's top providers",
          paragraph:
            "Compare the UK's leading health insurance providers and get expert advice from an experienced insurance specialist.",
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-health-insurance",
        },
        "Life Insurance 1": {
          heading: "Compare plans from the UK's top providers",
          paragraph:
            "Compare the UK's leading life insurance providers and get expert advice from an experienced insurance specialist.",
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-life-insurance",
        },
        "Income Protection 1": {
          heading: "Compare plans from the UK's top providers",
          paragraph:
            "Compare the UK's leading income protection insurance providers and get expert advice from an experienced insurance specialist.",
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-income-protection-insurance",
        },
        "Relevant Life Insurance 1": {
          heading: "Compare plans from the UK's top providers",
          paragraph:
            "Compare the UK's leading relevant life insurance providers and get expert advice from an experienced insurance specialist.",
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-relevant-life-insurance",
        },
      };

      var componentName = category + " " + variation;

      var heading = providerCtaMapping[componentName].heading;
      var paragraph = providerCtaMapping[componentName].paragraph;
      var buttonText = providerCtaMapping[componentName].buttonText;
      var buttonUrl = providerCtaMapping[componentName].buttonUrl;

      console.log("Selected Component Name is: " + componentName);

      const newHTML = `
            <div class="provider-cta_wrapper">
                <div class="simple-cta_top">
                    <h2 class="cta-custom-heading white-text">${heading}</h2>
                </div>
                <div class="simple-cta_p">
                    <p class="text-size-medium no-margin">${paragraph}</p>
                </div>
                <div class="simple-cta_rating">
                    <p class="no-margin">Rated Excellent</p>
                    <div class="simple-cta_rating-stars">
                        <div class="star-div"><img loading="lazy" src="https://cdn.prod.website-files.com/60a0cd9e83c3b8a9bf15f80e/60a50a5e74891b519fa714f5_google%20rating%20star.svg" alt="Google Review Star icon" class="google-star"></div>
                        <div class="star-div"><img loading="lazy" src="https://cdn.prod.website-files.com/60a0cd9e83c3b8a9bf15f80e/60a50a5e74891b519fa714f5_google%20rating%20star.svg" alt="Google Review Star icon" class="google-star"></div>
                        <div class="star-div"><img loading="lazy" src="https://cdn.prod.website-files.com/60a0cd9e83c3b8a9bf15f80e/60a50a5e74891b519fa714f5_google%20rating%20star.svg" alt="Google Review Star icon" class="google-star"></div>
                        <div class="star-div"><img loading="lazy" src="https://cdn.prod.website-files.com/60a0cd9e83c3b8a9bf15f80e/60a50a5e74891b519fa714f5_google%20rating%20star.svg" alt="Google Review Star icon" class="google-star"></div>
                        <div class="star-div"><img loading="lazy" src="https://cdn.prod.website-files.com/60a0cd9e83c3b8a9bf15f80e/60a50a5e74891b519fa714f5_google%20rating%20star.svg" alt="Google Review Star icon" class="google-star"></div>
                    </div>
                    <p class="no-margin">on</p>
                    <img width="80" loading="lazy" alt="Google logo" src="https://cdn.prod.website-files.com/60a0cd9e83c3b8a9bf15f80e/60a50b106c627b555f5c4354_google%20logo.svg" class="simple-cta_rating-google">
                </div>
                <a href="${buttonUrl}" class="button yellow w-button">${buttonText}</a>
            </div>
            `;

      $(this).html(newHTML);
    }
  });
});
