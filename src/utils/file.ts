import fs from 'fs'; // file system

export const deleteFile = async (filename: string) => {
    try {
        await fs.promises.stat(filename); // verifica se existe
    } catch (error) {
        return;
    }
    await fs.promises.unlink(filename); // remove arquivo para poder adicionar o novo
}