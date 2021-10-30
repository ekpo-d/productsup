exports.config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: ['./e2e/specs/*.feature'],
  cucumberOpts: {
    require: ['./e2e/steps/*.steps.ts']
  }
};