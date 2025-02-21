$(document).ready(function () {
  var components = $('[data-component-embed="CTA"]');

  components.each(function () {
    var type = $(this).attr("data-component-type");
    if (type == "Button") {
      var category = $(this).attr("data-component-category");
      var variation = $(this).attr("data-component-variation");

      const buttonCtaMapping = {
        "Health Insurance 1": {
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-health-insurance",
          buttonColor: "yellow",
        },
        "Health Insurance 2": {
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-health-insurance",
          buttonColor: "green",
        },
        "Health Insurance 3": {
          buttonText: "Request Quote",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-health-insurance",
          buttonColor: "yellow",
        },
        "Health Insurance 4": {
          buttonText: "Request Quote",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-health-insurance",
          buttonColor: "green",
        },
        "Private Healthcare 1": {
          buttonText: "Request Quote",
          buttonUrl:
            "https://practiceplusgroup.com/landing-page/wellsoon-mytribe/",
          buttonColor: "yellow",
        },
        "Private Healthcare 2": {
          buttonText: "Request Quote",
          buttonUrl:
            "https://practiceplusgroup.com/landing-page/wellsoon-mytribe/",
          buttonColor: "green",
        },
        "Life Insurance 1": {
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-life-insurance",
          buttonColor: "yellow",
        },
        "Life Insurance 2": {
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-life-insurance",
          buttonColor: "yellow",
        },
        "Life Insurance 3": {
          buttonText: "Request Quote",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-life-insurance",
          buttonColor: "yellow",
        },
        "Life Insurance 4": {
          buttonText: "Request Quote",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-life-insurance",
          buttonColor: "green",
        },
        "Income Protection 1": {
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-income-protection-insurance",
          buttonColor: "yellow",
        },
        "Income Protection 2": {
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-income-protection-insurance",
          buttonColor: "green",
        },
        "Income Protection 3": {
          buttonText: "Request Quote",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-income-protection-insurance",
          buttonColor: "yellow",
        },
        "Income Protection 4": {
          buttonText: "Get a Quote",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-income-protection-insurance",
          buttonColor: "green",
        },
        "Relevant Life Insurance 1": {
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-relevant-life-insurance",
          buttonColor: "yellow",
        },
        "Relevant Life Insurance 2": {
          buttonText: "Compare Quotes",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-relevant-life-insurance",
          buttonColor: "green",
        },
        "Relevant Life Insurance 3": {
          buttonText: "Request Quote",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-relevant-life-insurance",
          buttonColor: "yellow",
        },
        "Relevant Life Insurance 4": {
          buttonText: "Request Quote",
          buttonUrl:
            "https://www.mytribeinsurance.co.uk/compare-relevant-life-insurance",
          buttonColor: "green",
        },
      };

      var componentName = category + " " + variation;

      var buttonText = buttonCtaMapping[componentName].buttonText;
      var buttonUrl = buttonCtaMapping[componentName].buttonUrl;
      var buttonColor = buttonCtaMapping[componentName].buttonColor;

      console.log("Selected Component Name is: " + componentName);

      const newHTML = `
            <a href="${buttonUrl}" class="button w-button ${buttonColor}">${buttonText}</a>
          `;

      $(this).html(newHTML);
    }
  });
});
