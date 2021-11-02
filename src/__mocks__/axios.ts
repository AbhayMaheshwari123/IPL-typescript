export default {
    get:jest.fn().mockResolvedValueOnce({data:{}}),
    interceptors:{
        request:{
            use:jest.fn()
        },
        response:{
            use:jest.fn()
        }
    }
}