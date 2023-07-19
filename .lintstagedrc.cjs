module.exports = {
  '*.{md,json,yml}'(files){
    return [`nx format:write --files=${files.join(',')}`]
  },

  '*.{scss}'() {
    return ['nx affected --target=stylelint']
  },

  '*.{js,ts,html,cjs,mjs,jsx,tsx}'(files) {
    return [`nx affected:lint --files=${files.join(',')}`];
  },
};

