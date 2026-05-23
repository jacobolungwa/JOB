document.getElementById('edit-btn').addEventListener('click', function() {
    document.getElementById('profile-view').classList.add('hidden');
    document.getElementById('profile-edit').classList.remove('hidden');
});

document.getElementById('cancel-btn').addEventListener('click', function() {
    document.getElementById('profile-view').classList.remove('hidden');
    document.getElementById('profile-edit').classList.add('hidden');
});
