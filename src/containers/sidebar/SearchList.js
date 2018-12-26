import React from 'react';



const SearchList = (props) => {
    return (
        <ul className="list-group">
			{
				props.items.map(el => {
					return(
						<li className="list-group-item"
						data-category={el}
						key={el}>
							{el}
						</li>
					)
				})
			}
    	</ul>
    );
}

export default SearchList;