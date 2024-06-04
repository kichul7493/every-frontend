/// <reference types="cypress" />

describe("로그인 테스트", () => {
  it("로그인 페이지가 출력된다", () => {
    cy.visit("/login");

    cy.get("h1").contains("로그인");
    cy.get("input[name=email]").should("be.visible");
    cy.get("input[name=password]").should("be.visible");
    cy.get("button[type=submit]").should("be.visible");
  });

  it("올바른 계정 정보를 입력하면 로그인에 성공하고 메인 페이지로 이동한다.", () => {
    cy.visit("/login");

    cy.get("input[name=email]").type("kichul7493@gmail.com");
    cy.get("input[name=password]").type("test1234000");
    cy.get("button[type=submit]").click();

    cy.wait(2000);

    cy.url().should("eq", "http://localhost:3000/");
  });

  it("잘못된 계정 정보를 입력하면 로그인에 실패한다", () => {
    cy.visit("/login");

    cy.get("input[name=email]").type("test@test.com");
    cy.get("input[name=password]").type("test1234");
    cy.get("button[type=submit]").click();

    cy.get("span").contains("이메일 혹은 비밀번호가 올바르지 않습니다.");
  });
});
