const custom = [
    { label: "displaystyle", detail: "\\displaystyle", apply: "\\displaystyle ${}" },
    { label: "choose", detail: "\\choose", apply: "{${} \\choose ${}}" },

    /* block */

    { label: "align", detail: "\\begin{align}", apply: "$$\n\\begin{align}\n${}\n\\end{align}\n$$", },
    { label: "aligned", detail: "\\begin{aligned}", apply: "$$\n\\begin{aligned}\n${}\n\\end{aligned}\n$$" },
    { label: "cases", detail: "\\begin{cases}", apply: "$$\n\\begin{cases}\n0, & p \\\\\n1, & q\n\\end{cases}\n$$" },
    { label: "matrix", detail: "\\begin{matrix}", apply: "$$\n\\begin{matrix}\n  a & b \\\\\n  c & d\n\\end{matrix}$$" },
    { label: "pmatrix", detail: "\\begin{pmatrix}", apply: "$$\n\\begin{pmatrix}\n  a & b \\\\\n  c & d\n\\end{pmatrix}$$" },
    { label: "bmatrix", detail: "\\begin{bmatrix}", apply: "$$\n\\begin{bmatrix}\n  a & b \\\\\n  c & d\n\\end{bmatrix}$$" },
    { label: "vmatrix", detail: "\\begin{vmatrix}", apply: "$$\n\\begin{vmatrix}\n  a & b \\\\\n  c & d\n\\end{vmatrix}$$" }
];
