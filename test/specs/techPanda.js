describe('Live Tech Panda', function () {
  it('Day 1 from guru99.com', async () => {
    browser.url('http://live.techpanda.org/')

    // Verify Title of the page and click 'MOBILE' menu
    await $('.level0').click();
    // Click Select 'SORT BY'
    const selectDropdown = await $('[title="Sort By"]');
    await selectDropdown.click();

    // Select dropdown as 'name
    const nameOption = await $('//select[@title="Sort By"]//option[normalize-space()="Name"]');
    await nameOption.click();


    await new Promise(resolve => setTimeout(resolve, 10000))
  })
})