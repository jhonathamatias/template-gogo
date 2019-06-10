export default function MediaScreen(query, { callback, rollback }) {
    let media = window.matchMedia(query);
    rollback = rollback || null; 
    let change = () => {
        if (media.matches) {
            callback();
            return;
        }
        if (!rollback) {
            return;
        }
        rollback();
    }
    media.addListener(change);
    change();
}
