module.exports = {
  '*.{js,ts,html,cjs,mjs,jsx,tsx,md,json,yml}'(files) {
    return [`nx affected:lint --files=${files.join(',')}`,`nx format:write --files=${files.join(',')}`, 'nx affected --target=test'];
  },
};

