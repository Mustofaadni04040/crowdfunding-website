/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email and password are wrong
 *   - should display homepage when email and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/login');
  });

  it('should display login page correctly', () => {
    // memverifikasi elemen yang harus tampak pada halaman login
    cy.get('input[placeholder="masukan email..."]').should('be.visible');
    cy.get('input[placeholder="masukan password..."]').should('be.visible');
    cy.get('button')
      .contains(/^Masuk$/)
      .should('be.visible');
  });

  it('should display alert when email is empty', () => {
    // klik tombol login tanpa mengisi email
    cy.get('button')
      .contains(/^Masuk$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    // mengisi email
    cy.get('input[placeholder="masukan email..."]').type('testuser@gmail.com');

    // klik tombol login tanpa mengisi password
    cy.get('button')
      .contains(/^Masuk$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email and password are wrong', () => {
    // mengisi email
    cy.get('input[placeholder="masukan email..."]').type('testuser@gmail.com');

    // mengisi password salah
    cy.get('input[placeholder="masukan password..."]').type('wrongpassword');

    // klik tombol login
    cy.get('button')
      .contains(/^Masuk$/)
      .click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should display homepage when email and password are correct', () => {
    // mengisi email
    cy.get('input[placeholder="masukan email..."]').type('admin@gmail.com');

    // mengisi password
    cy.get('input[placeholder="masukan password..."]').type('admin123');

    // klik tombol login
    cy.get('button')
      .contains(/^Masuk$/)
      .click();

    // memverifikasi bahwa elemen yang berada di homepage ditampilkan
    cy.get('.input-search').should('exist');
    cy.get("input[placeholder='Cari donasi...']").should('exist');
  });
});
