

    it('GET',()=>{
        cy.request({
            url: 'https://tastedive.com/api/similar?q=Bob',

        })
        

    })


    it("test fixture ", () => {
		cy.fixture("userdata").then(fix => {
			cy.request({
				url: 'https://tastedive.com/api/similar?q=${fix.username}',
			});
			cy.request({
				url: 'https://tastedive.com/api/similar?q=${fix.password}',
			});
		});
	});

    
    it("fichier json", () => {
		cy.personnalisé("Manbob").then(response => {
			cy.log(JSON.stringify(response));
		});
	});

 4  
    