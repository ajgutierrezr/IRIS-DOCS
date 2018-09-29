const KoaRouter = require('koa-router');
const pkg = require('../../../package.json');

const router = new KoaRouter();
router.get('doc.show', '/', async (ctx) => {
  await ctx.render('../routes/doc/index', { appVersion: pkg.version });
});

module.exports = router;
