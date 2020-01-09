import { AuthorizationService } from './authentication.service';

describe('AuthorizationService', () => {
    let service: AuthorizationService;

    beforeEach(() => {
        service = new AuthorizationService();
    });

    it('#login set item to local storage', () => {
        const spySet = spyOn(localStorage, 'setItem');
        service.login();
        expect(spySet)
            .toHaveBeenCalled();
    });

    it('#logout should delete item from local storage', () => {
        const spyGet = spyOn(localStorage, 'removeItem');
        service.logout();
        expect(spyGet)
            .toHaveBeenCalled();
    });
    it('#getUserInfo should get user info from local storage', () => {
        const spyGet = spyOn(localStorage, 'getItem');
        service.getUserInfo();
        expect(spyGet)
            .toHaveBeenCalled();
    });
});
