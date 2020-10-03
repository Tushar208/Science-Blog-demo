var burger = document.getElementsByClassName('burger');
var drop = document.getElementsByClassName('drop');

burger[0].onclick = function () {
    if (drop[0].style.display == 'none') {
        drop[0].style.display = 'block';
    }
    else {
        drop[0].style.display = 'none'
    }
}

var modal1 = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

var posts = document.getElementsByClassName('post');
extraText = `In 1915, Albert Einstein developed his theory of general relativity, having
earlier shown that gravity does influence light's motion. Only a few months later, Karl Schwarzschild found a
solution to the Einstein field equations, which describes the gravitational field of a point mass and a spherical mass.[24]
A few months after Schwarzschild, Johannes Droste, a student of Hendrik Lorentz, independently gave the same
solution for the point mass and wrote more extensively about its properties.[25][26] This solution had a peculiar behaviour at what is now
called the Schwarzschild radius, where it became singular, meaning that some of the terms in the Einstein equations became infinite.
The nature of this surface was not quite understood at the time. In 1924, Arthur Eddington showed that the singularity disappeared after a change of
coordinates (see Eddington–Finkelstein coordinates), although it took until 1933 for Georges Lemaître to realize that this meant thesingularity at the Schwarzschild
radius was a non-physical coordinate singularity.[27] Arthur Eddington did however comment on the possibility of a star with mass
compressed to the Schwarzschild radius in a 1926 book, noting that Einstein's theory allows us to rule out overly large densities for
visible stars like Betelgeuse because "a star of 250 million km radius could not possibly have so high a density as the sun. Firstly, the force of gravitation
would be so great that light would be unable to escape from it, the rays falling back to the star like a stone to the earth. Secondly, the red
shift of the spectral lines would be so great that the spectrum would be shifted out of existence. Thirdly, the mass would produce so much curvature
of the space-time metric that space would close up around the star, leaving us outside (i.e., nowhere)."[28][29]
In 1931, Subrahmanyan Chandrasekhar calculated, using special relativity, that a non-rotating body of electron-degenerate matter above
a certain limiting mass (now called the Chandrasekhar limit at 1.4 M☉) has no stable solutions.[30] His arguments were opposed by many of his contemporaries
like Eddington and Lev Landau, who argued that some yet unknown mechanism would stop the collapse.[31] They were partly correct: a white dwarf slightly more massive than the
Chandrasekhar limit will collapse into a neutron star,[32] which is itself stable. But in 1939, Robert Oppenheimer and others predicted that neutron stars above another
limit (the Tolman–Oppenheimer–Volkoff limit) would collapse further for the reasons presented by Chandrasekhar, and concluded that no law of physics
was likely to intervene and stop at least some stars from collapsing to black holes.[33] Their original calculations, based on the Pauli exclusion principle, gave
it as 0.7 M☉; subsequent consideration of strong force-mediated neutron-neutron repulsion raised the estimate to approximately 1.5 M☉ to 3.0 M☉.[34] Observations of the
neutron star merger GW170817, which is thought to have generated a black hole shortly afterward, have refined the TOV limit estimate to ~2.17 M☉.[35][36][37][38][39]
Oppenheimer and his co-authors interpreted the singularity at the boundary of the Schwarzschild radius as indicating that this was the boundary of a bubble in
which time stopped. This is a valid point of view for external observers, but not for infalling observers. Because of this property, the collapsed stars were
called "frozen stars", because an outside observer would see the surface of the star frozen in time at the instant where its collapse takes it to the Schwarzschild radius`

let mainComment = `<div class="comment">
<div>
  <img src="#">
  <div>
    <h4 id="abc">Zakir Hossain</h4>
    <p>01:18 A.M <br> 09.28.2020</p>
  </div>
</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nesciunt temporibus non voluptates delectus unde ullam perferendis tenetur repellendus fugit.</p>
</div>`

let commenters = ['Md Zakir Hossain', 'Afin Lupa', 'Razia Sultana Eti', 'Masum Moshiur', 'Mahmud Shafi', 'Nurmohol Nisha'];
var comments = `<div class="userCmt"><form action="#">
<input type="text" placeholder="Write a comment"><button type="submit">Comment</button>
</form></div>`;
let i = 1;
for (let name of commenters) {
    let photoSource = 'img/commentimg/cmt' + i + '.png';
    var comment1 = '<div class="comment"><div><img src="' + photoSource + '"><div><h4>' + name + '</h4><p>01:18: A.M<br>09.28.2020</p>';
    var comment2 = '</div></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nesciunt temporibus non voluptates delectus unde ullam perferendis tenetur repellendus fugit.</p></div>';
    var comment = comment1 + comment2;
    comments = comments + comment;
    i++;
}

console.log(comments);

for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    post.addEventListener('click', function() {
        for (let j = 0; j < posts.length; j++) {
            if (posts[j] != post) {
                posts[j].style.display = 'none';
            }
        }
        post.style.cursor = 'auto'
        post.querySelector('.extra').innerText = extraText;
        post.querySelector('.comm').innerHTML = comments;
    });
}

function backFunc() {
    for (let post of posts) {
        post.style.display = 'block';
        post.style.cursor = 'pointer';
        post.querySelector('.extra').innerText = '';
        post.querySelector('.comm').innerText = '';
    }
}