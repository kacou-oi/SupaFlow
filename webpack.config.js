module.exports = {
  entry: './workers/supaflow-worker.js',
  output: {
    filename: 'index.js',
    path: __dirname + '/dist',
  },
  mode: 'production',
  target: 'webworker',
};
