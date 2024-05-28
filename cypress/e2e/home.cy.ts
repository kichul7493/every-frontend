/// <reference types="cypress" />

describe("홈페이지 테스트", () => {
  it("상단바, 태그리스트, 게시글 목록이 출력된다", () => {
    cy.visit("/");

    cy.get("h1").contains("Every");
    cy.get("a").contains("로그인");
  });
});
