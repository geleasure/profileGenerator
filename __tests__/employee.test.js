const Employee = require("../lib/employee");

// Employee Class / Construtor Jest test
describe('Employee', () => {
    it('Should instantiate the Employee instance', () => {
        const employee = new Employee();
        expect(typeof (employee)).toBe('object');
    });

    it('Should set the name using the constructor argument', () => {
        const testName = 'John';
        const employee = new Employee(testName);
        expect(employee.name).toBe(testName);
    });

    it('Should set the id using the constructor argument', () => {
        const testId = 10;
        const employee = new Employee(10, testId);
        expect(employee.id).toBe(testId);
    });

    it('Should set the email address using the constructor argument', () => {
        const testEmail = 'test@email.com';
        const employee = new Employee('email', 1, testEmail);
        expect(employee.email).toBe(testEmail);
    });
});

// getName() method Jest test
describe('getName', () => {
    it('Should get name from getName()', () => {
        const testName = 'John';
        const employee = new Employee(testName);
        expect(employee.getName()).toBe(testName);
    });
});

// getId() method Jest test
describe('getId', () => {
    it('Should get id from getId()', () => {
        const testId = 10;
        const employee = new Employee(10, testId);
        expect(employee.getId()).toBe(testId);
    });
});

// getEmail() method Jest test
describe('getEmail', () => {
    it('Should get email from getEmail()', () => {
        const testEmail = 'test@email.com';
        const employee = new Employee('email', 1, testEmail);
        expect(employee.getEmail()).toBe(testEmail);
    });
});

// getRole() method Jest test
describe('getRole', () => {
    it('getRole() should return \"Employee\"', () => {
        const testRole = 'Employee';
        const employee = new Employee('Role', 1, 'test@email.com');
        expect(employee.getRole()).toBe(testRole);
    });
});