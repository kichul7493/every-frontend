/// <reference types="cypress" />

describe("홈페이지 테스트", () => {
  it("상단 메뉴에 로고 텍스트와 로그인 버튼이 출력된다.", () => {
    cy.visit("/");

    cy.get("h1").contains("Every");
    cy.get("a").contains("로그인");
  });

  it("로그인 버튼을 클릭하면 로그인 페이지로 이동한다.", () => {
    cy.visit("/");

    cy.get("a").contains("로그인").click();

    cy.url().should("include", "/login");
  });

  it("태그 리스트와 게시글 목록이 출력된다.", () => {
    cy.visit("/");

    cy.get('[href="/?tag=all"]').contains("All");
    cy.get("li").should("have.length.greaterThan", 2);
  });

  it("게시글을 클릭하면 해당 게시글로 이동한다.", () => {
    cy.visit("/");

    cy.get("li").first().click();

    cy.url().should("include", "/post");
  });
});
