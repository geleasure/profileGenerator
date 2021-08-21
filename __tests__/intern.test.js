// Obtain / Require Intern Class
const Intern = require('../lib/intern');

// Intern Class Constructor Jest test
describe('Intern', () => {
    it('Should set school using constructor', () => {
        const testSchool = 'University of Miami';
        const intern = new Intern('School', 1, 'test@email.com', testSchool);
        expect(intern.school).toBe(testSchool);
    });
});

// getRole() Method Jest test
describe('getRole', () => {
    it('Should return \"Intern\" using getRole()', () => {
        const testRole = 'Intern';
        const intern = new Intern('Role', 1, 'test@email.com', 'University of Miami');
        expect(intern.getRole()).toBe(testRole);
    });
});

// getSchool() Method Jest test
describe('getSchool', () => {
    it('Should get school using getSchool()', () => {
        const testSchool = 'University of Miami';
        const intern = new Intern('School', 1, 'test@email.com', testSchool);
        expect(intern.getSchool()).toBe(testSchool);
    });
});