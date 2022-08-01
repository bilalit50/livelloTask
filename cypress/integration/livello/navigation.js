describe("Header Navigating Tabs ", () => {
  //Open website and switch to english
  it("Open livello Website and Switch to English", function () {
    cy.visit("https://www.livello.com/?lang=en");
  });

  // Click on Smart kiosk
  it("Click on SMART KIOSK Tab and Asserts Url!", () => {
    cy.get(
      '#comp-l0rb3d31 > [data-mesh-id="comp-l0rb3d31inlineContent"] > [data-mesh-id="comp-l0rb3d31inlineContent-gridContainer"] a span'
    ).each((el, index) => {
      if (el.text().includes("SMART KIOSK")) {
        cy.get(
          '#comp-l0rb3d31 > [data-mesh-id="comp-l0rb3d31inlineContent"] > [data-mesh-id="comp-l0rb3d31inlineContent-gridContainer"] a span'
        )
          .eq(index)
          .click();
      }
    });
    cy.url().should("eq", "https://www.livello.com/smartkiosk?lang=en");
    cy.wait(3000);
  });

  // Click on Feature tab
  it("Click on Feature Tab & Scroll down until feature start displaying.", () => {
    cy.wait(3000);
    cy.get(
      '#comp-kfz9q2wn [data-mesh-id="comp-kfz9q2wninlineContent-gridContainer"]'
    )
      .find("a span")
      .each((el, index) => {
        if (el.text().includes("FEATURES")) {
          cy.get(
            '#comp-kfz9q2wn [data-mesh-id="comp-kfz9q2wninlineContent-gridContainer"]'
          )
            .find("a span")
            .eq(index)
            .click();
        }
      });
    cy.wait(2000);
  });

  // Verify the features
  it("Verify the Features", () => {
    // Verify First features
    const firstFeatures = [
      "An",
      "innovative vending solution",
      "",
      "for the autonomous sale of fresh food and daily necessities.",
    ];
    cy.get("#comp-kfgk4squ p span[style='letter-spacing:0em;']")
      .find("span")
      .each((el, index) => {
        cy.wrap(el).should("contain.text", firstFeatures[index]);
      });

    // Verify Second features
    const secondFeatures = [
      "“Grab ‘n’ Go”",
      "",
      "for self-service with automatic check-out and 24/7 availability",
    ];
    cy.get(
      "#comp-kfgl18fa2 span[style='color:#000000;'] span[style='letter-spacing:0em;']"
    )
      .find("span")
      .each((el, index) => {
        cy.wrap(el).should("contain.text", secondFeatures[index]);
      });

    // Verify Third features
    const thirdFeatures = [
      "Can be used as Micro-Market, mini-canteen, pick-up station, inventory management system or smart store",
    ];
    cy.get(
      "#comp-kfgl3aus4 span[style='color:#000000;'] span[style='letter-spacing:0em;']"
    ).each((el, index) => {
      cy.wrap(el).should("contain.text", thirdFeatures[index]);
    });

    // Verify Fourth features
    const fourthFeatures = [
      "Plug and Play",
      "to be embedded in any building. Only requires",
      "a power source and internet",
    ];
    cy.get("#comp-kfgl3avw2 p span[style='letter-spacing:0em;']")
      .find("span")
      .each((el, index) => {
        cy.wrap(el).should("contain.text", fourthFeatures[index]);
      });
  });

  // Submit Scroll down and submit button
  it("Scroll down until form start displaying.", () => {
    cy.get("#comp-kfnsa6g2").scrollIntoView();
    cy.wait(2000);
  });
  it("Click on “Submit” button without providing input in any field", () => {
    cy.get('[data-testid="buttonElement"]').click();
  });
});
