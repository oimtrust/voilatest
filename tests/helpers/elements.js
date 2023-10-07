export function get(selector) {
    return cy.get(selector);
}

export function fillField(selector, value, ...args) {
    return cy.get(selector).type(value, ...args).should('have.value', value);
}

export function fillFieldWithoutAssert(selector, value, ...args) {
    return cy.get(selector).type(value, ...args);
}

export function click(selector, ...args) {
    return cy.get(selector).click(...args);
}

export function clickContain(selector, content, ...args) {
    return cy.get(selector).contains(content).click(...args);
}

export function select(selector, text, value) {
    return cy.get(selector).select(text).should('have.value', value);
}