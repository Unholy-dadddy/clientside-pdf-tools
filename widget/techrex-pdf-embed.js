<script>
(() => {
  const DEFAULT_DOMAIN = 'https://pdffreeeditor.com';

  const LABEL = {
    edit: 'Edit PDF',
    'add-image': 'Add Image',
    sign: 'Sign PDF',
    merge: 'Merge PDF',
    split: 'Split PDF'
  };

  const PATH = {
    edit: '/edit-pdf/',
    'add-image': '/add-image-pdf/',
    sign: '/sign-pdf/',
    merge: '/merge-pdf/',
    split: '/split-pdf/'
  };

  const css = `
.trx-wrap{display:flex;gap:.6rem;flex-wrap:wrap}
.trx-btn{font:600 14px/1.2 system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial,sans-serif;
  padding:.6rem 1rem;border-radius:.7rem;border:1px solid #d0d7de;background:#fff;text-decoration:none}
.trx-btn.primary{background:#2563eb;color:#fff;border-color:#2563eb}
.trx-btn:hover{filter:brightness(0.98)}
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  function render() {
    document.querySelectorAll('.trx-pdf-buttons').forEach(root => {
      if (root.dataset.rendered) return;
      root.dataset.rendered = '1';

      const base = (root.dataset.domain || DEFAULT_DOMAIN).replace(/\/+$/, '');
      const tools = (root.dataset.tools || 'edit,add-image,sign')
        .split(',')
        .map(t => t.trim())
        .filter(Boolean);
      const variant = (root.dataset.variant || 'outline').toLowerCase();

      const wrap = document.createElement('div');
      wrap.className = 'trx-wrap';

      tools.forEach(tool => {
        const a = document.createElement('a');
        a.className = `trx-btn ${variant === 'primary' ? 'primary' : ''}`;
        a.href = base + (PATH[tool] || '/');
        a.target = '_blank';
        a.rel = 'noopener';
        a.textContent = LABEL[tool] || tool;
        wrap.appendChild(a);
      });

      root.appendChild(wrap);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
<script>
