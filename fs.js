function readFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error("Read file failed"));
        reader.readAsText(file);
    });
}

async function saveFile(savedFileName, content) {
    if (!('showSaveFilePicker' in window)) {
        return fallbackSave(savedFileName, content);
    }

    try {
        const options = {
            suggestedName: savedFileName,
            types: [
                {
                    description: 'Text Files',
                    accept: { 'text/plain': ['.md'] },
                },
            ],
        };

        const handle = await window.showSaveFilePicker(options);
        const writable = await handle.createWritable();
        await writable.write(content);
        await writable.close();
    } catch (error) {
        if (error.name !== 'AbortError') {
            console.error('Save error:', error);
        }
        throw error;
    }
}

function fallbackSave(filename, content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    setTimeout(() => {
        URL.revokeObjectURL(url);
        a.remove();
    }, 100);
}
