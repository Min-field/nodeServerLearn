suite(`About Page test`, function(){
    test('page should contain a link to contack page', function(){
        assert($('a[href="/contact"]').length);
    });
});