const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById('search-btn');

const search =()=>{
    const searchKeyword = searchInput.value.trim();
    if(searchKeyword){
        window.location.href = `https://www.google.com/search?q=${searchKeyword}`;
    }
}

searchBtn.addEventListener('click',()=>{
    search();
});

searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    search();
});