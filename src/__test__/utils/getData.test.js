import getData from '../../utils/getData';

describe('Fetch API', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    test('Llamar API and return data', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

        getData('https://google.com')
            .then((response) => {
                expect(response.data).toEqual('123456')
            })

            expect(fetch.mock.call[0][0].toEqual('https://google.com'))
    })
})