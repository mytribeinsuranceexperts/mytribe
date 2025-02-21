$(document).ready(function () {
  var components = $('[data-component-embed="CTA"]');

  components.each(function () {
    var type = $(this).attr("data-component-type");
    if (type == "Graphic") {
      var category = $(this).attr("data-component-category");
      var variation = $(this).attr("data-component-variation");

      const graphicCtaMapping = {
        "Health Insurance 1": {
          heading: "Looking for affordable health insurance?",
          paragraph:
            "Request a free comparison quote, and we’ll connect you with an experienced health insurance specialist to help you find the best policy at the best price.",
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-health-insurance",
          graphics: "Standard Graphic",
          backgroundColor: "yellow",
          buttonColor: "Green",
        },
        "Private Healthcare 1": {
          heading: "Why wait? Get a quote for private surgery today.",
          paragraph: "Choose Wellsoon and get your surgery in 4 to 6 weeks.",
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://practiceplusgroup.com/landing-page/wellsoon-mytribe/",
          graphics: "Wellsoon Graphic",
          backgroundColor: "yellow",
          buttonColor: "Green",
        },
        "Life Insurance 1": {
          heading: "Looking for affordable life insurance?",
          paragraph:
            "Request a free comparison quote, and we’ll connect you with an experienced life insurance specialist to help you find the best policy at the best price.",
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-life-insurance",
          graphics: "Standard Graphic",
          backgroundColor: "yellow",
          buttonColor: "Green",
        },
        "Income Protection 1": {
          heading: "Looking for affordable income protection?",
          paragraph:
            "Request a free comparison quote, and we’ll connect you with an experienced income protection insurance specialist to help you find the best policy at the best price.",
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-income-protection-insurance",
          graphics: "Standard Graphic",
          backgroundColor: "yellow",
          buttonColor: "Green",
        },
        "Relevant Life Insurance 1": {
          heading: "Looking for affordable income protection insurance?",
          paragraph:
            "Request a free comparison quote, and we’ll connect you with an experienced relevant life insurance specialist to help you find the best policy at the best price.",
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-relevant-life-insurance",
          graphics: "Standard Graphic",
          backgroundColor: "yellow",
          buttonColor: "Green",
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

      var heading = graphicCtaMapping[componentName].heading;
      var paragraph = graphicCtaMapping[componentName].paragraph;
      var buttonText = graphicCtaMapping[componentName].buttonText;
      var buttonUrl = graphicCtaMapping[componentName].buttonUrl;
      var graphics = graphicCtaMapping[componentName].graphics;
      var backgroundColor = graphicCtaMapping[componentName].backgroundColor;
      var buttonColor = graphicCtaMapping[componentName].buttonColor;

      console.log("Selected Component Name is: " + componentName);

      var graphicsCode = "";

      //Adds graphic and adjusts accordingly
      if (graphics) {
        if (graphics == "Standard Graphic") {
          graphicsCode = `
          <div class="simple-cta_right">
            <img src="https://cdn.prod.website-files.com/60a0cd9e83c3b8a9bf15f80e/66d99630bd98dcd260fbf61b_looking%20for%20health%20insurance.svg" loading="lazy" width="195" height="150" alt="Illustration of three people having questions about private health insurance in UK." class="simple-cta_graphic">
          </div>
            `;
        } else if (graphics == "Wellsoon Graphic") {
          graphicsCode = `
            <div class="simple-cta_right">
                <img src="https://cdn.prod.website-files.com/60a0cd9e83c3b8a9bf15f80e/66d8407948e038bc729fcfb2_practice%20plus%20image.png" loading="lazy" width="1025" height="773" alt="Illustration of man going for a walk with his dog." class="simple-cta_graphic">
            </div>
            `;
        }
      }

      const newHTML = `
        <div class="simple-cta_wrapper">
            <div class="simple-cta_background-color ${backgroundColor}"></div>
            <img src="https://cdn.prod.website-files.com/60a0cd9e83c3b8a9bf15f80e/66cd9d7887c86cb3ac99d3ea_background%20curve.svg" loading="lazy" width="203" height="150" alt="" class="simple-cta_background-image right">
            <div class="simple-cta_left">
                <h2 class="cta-custom-heading">${heading}</h2>
                <p class="text-size-medium no-margin">${paragraph}</p>
                <a href="${buttonUrl}" class="button w-button ${buttonColor}">${buttonText}</a>
            </div>
            ${graphicsCode}
        </div>
        `;

      $(this).html(newHTML);
    }
  });
});
