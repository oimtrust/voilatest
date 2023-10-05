export function shouldBeVisible(selector, timeout = 10000) {
    cy.get(selector, {timeout}).should("be.visible");
}

export function shouldContainText(selector, ...args) {
    cy.get(selector).should("contain", ...args);
}