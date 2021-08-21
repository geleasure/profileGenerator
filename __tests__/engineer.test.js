// Obtain / Require Engineer Class
const Engineer = require('../lib/engineer');

// Engineer Class Constructor Jest test
describe('Engineer', () => {
    it('Should set GitHUb account using constructor', () => {
        const testGitHub = 'GitHub';
        const engineer = new Engineer('Engineer', 1, 'test@email.com', testGitHub);
        expect(engineer.github).toBe(testGitHub);
    });
});

// getRole() Method Jest test
describe('getRole', () => {
    it('Should return \'Engineer\' using getRole()', () => {
        const testRole = 'Engineer';
        const engineer = new Engineer('Role', 1, 'test@email.com', 'GitHubUser');
        expect(engineer.getRole()).toBe(testRole);
    });
});

// getGithub() Method Jest test
describe('getGithub', () => {
    it('Should get GitHub username using getGithub()', () => {
        const testVal = 'GitHubUser';
        const engineer = new Engineer('GitHub', 1, 'test@email.com', testVal);
        expect(engineer.getGithub()).toBe(testVal);
    });
});