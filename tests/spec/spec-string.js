describe('Modulo lucida.string', function() {

    describe('lucida.string.sanitize', function() {

        it('Deve remover caracteres especiais', function() {
            var str = 'belt'
            expect(lucida.string.sanitize(str)).toEqual('belt')
        })

        it('Deve retornar uma string em branco se o parâmetro não for uma string', function() {
            var str = {}
            expect(lucida.string.sanitize(str)).toEqual('')
        })

        it('Deve retornar uma string apenas em lowercase', function() {
            var str = 'YELlow'
            expect(lucida.string.sanitize(str)).toEqual('yellow')
        })

        it('Deve substituir espaço por underline', function() {
            var str = 'yellow belt'
            expect(lucida.string.sanitize(str)).toEqual('yellow_belt')
        })

        it('Deve substituir apenas números', function() {
            var str      = '154yellow1234belt124'
            var onlyWord = true
            expect(lucida.string.sanitize(str, onlyWord)).toEqual('yellow_belt')
        })

    })

    describe('lucida.string.trimRight', function() {

        it('Deve retornar uma string sem espaço á direita', function() {
            var str = 'yellow belt     ';
            expect(lucida.string.trimRight(str)).toEqual('yellow belt')
        })

    })

    describe('lucida.string.trimLeft', function() {

        it('Deve retornar uma string sem espaço á esquerda', function() {
            var str = ' yellow belt';
            expect(lucida.string.trimLeft(str)).toEqual('yellow belt')
        })

    })

    describe('lucida.string.replaceAll', function() {

        it('Deve retornar uma string que substitua todos os caracteres indesejados por desejáveis', function() {
            var str = '__yellow belt__yellow belt__'
            var token = '_'
            var newtoken = ' '
            expect(lucida.string.replaceAll(str, token, newtoken)).toEqual('  yellow belt  yellow belt  ')
        })

    })


})
