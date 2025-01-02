module.exports = {
  entry: './workers/supabase-worker.js',
  output: {
    filename: 'index.js',
    path: __dirname + '/dist',
  },
  mode: 'production',
  target: 'webworker',
};
