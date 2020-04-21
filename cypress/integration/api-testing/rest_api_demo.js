describe('HTTP Demo', () => {
    it('GET', () => {
        cy.request({
            method: 'GET',
            url: 'http://httpbin.org/get',
        }).then(function (response) {
            expect(response.body).have.property('url')
        });
    });

    it('POST', () => {
    cy.request({
        method: 'POST',
        url: 'http://httpbin.org/post',
        body: {
            'name': 'Ragu',
            'age': 1
        },
        headers: {
            'content-type': 'application/json'
        }
    }).then(function (response) {
        expect(response.body).have.property('json');
        expect(response.body.json).to.deep.equal({
            "name": "Ragu",
            "age": 1
            });
        });
    });
});