describe('API Test', () => {
    it('should make a GET request to https://reqres.in/api/users/2', () => {
      cy.request('GET', 'https://reqres.in/api/users/2')
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body.data.id).to.equal(2);
          // Add more assertions as needed
        });
    });
  });
  