import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/image'

import image1 from '../images/moi1.jpg'

const SecondPage = () => (
  <Layout image={image1}>
    <SEO title="About Me" />
    <h1>About me</h1>

    <Image />

    <p style={{ margin: '30px 0 60px 0' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales non risus eget pellentesque. Quisque facilisis, mauris id convallis pharetra, felis sem auctor purus, at porta urna eros ac neque. Phasellus vel imperdiet magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam scelerisque ligula quis orci finibus, quis fermentum lectus consequat. Pellentesque ultricies sem libero. Phasellus eleifend venenatis lectus, in lobortis ante consectetur non. Morbi ac ultrices tortor. Nulla dignissim lorem et augue ullamcorper, nec sollicitudin ligula molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam vel ipsum vestibulum odio laoreet malesuada eu eu ante. Nullam blandit imperdiet nisl, et tincidunt dui aliquam sed. Nullam sollicitudin dignissim magna, at tincidunt elit fringilla maximus. Vestibulum ante leo, hendrerit vel facilisis sit amet, eleifend quis dui. Vivamus id magna ultricies, vestibulum purus a, consectetur ipsum.

In nec faucibus lectus. Curabitur nisi purus, imperdiet eget tempus at, mollis sed mauris. Nunc erat neque, faucibus non orci sed, tristique tempus dui. Phasellus pulvinar et tortor hendrerit tempus. Duis molestie diam at enim lacinia porttitor. Pellentesque ullamcorper sagittis accumsan. Morbi fermentum eu diam sed tempor. Morbi lorem nunc, molestie et mi et, gravida pellentesque libero. Proin placerat felis sed posuere viverra. Donec eget mattis diam. In aliquam ipsum auctor, vulputate nunc lobortis, tempus leo. Nunc ut orci eu sapien blandit sagittis.

Sed sit amet sodales libero. Morbi hendrerit placerat vestibulum. Mauris luctus efficitur eros. Aliquam erat volutpat. Aenean lobortis convallis tellus, a euismod sapien pharetra non. Vivamus nunc massa, elementum eu ultrices eget, volutpat ut massa. In hac habitasse platea dictumst. Etiam vel diam non ipsum tempus volutpat. Nunc euismod non massa ac vehicula. Donec rutrum, sapien vitae suscipit elementum, enim libero rutrum metus, et aliquet sapien libero non risus. Mauris vitae mollis nibh. In sed sollicitudin mauris. Phasellus cursus sit amet elit sit amet pharetra. Curabitur volutpat dictum justo vel aliquet. Proin sollicitudin, urna id fringilla dictum, erat ante auctor arcu, consequat accumsan neque orci ut felis.

Fusce ac augue at turpis feugiat vulputate. Aliquam pellentesque nisl vel mollis vestibulum. Vivamus venenatis laoreet justo, nec pharetra leo pharetra nec. Nulla sed quam a lacus aliquam blandit. Nulla sodales a est at commodo. Praesent felis est, dapibus vitae augue ut, auctor euismod nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis dui ante, viverra ac erat a, tincidunt tempus eros. Aenean non pellentesque risus, id pellentesque sapien. Nam sed sodales risus. Morbi in dui a magna varius placerat vel et tortor. Sed dictum congue diam a egestas. Sed eu aliquet felis.

Fusce felis enim, sagittis ut odio eget, sollicitudin ultricies erat. Fusce sagittis ligula urna, at tempus risus aliquet ac. Sed blandit non lacus congue interdum. Donec facilisis lacinia tempus. Ut in est id augue maximus pharetra in id nulla. Aliquam vestibulum a diam volutpat vehicula. Donec ut velit et augue tincidunt elementum a nec felis. Aliquam erat volutpat. Vivamus in egestas enim. Praesent non mollis odio, vitae ornare massa. Ut pharetra non arcu vitae mattis. Pellentesque at urna orci. Etiam accumsan venenatis consectetur. Morbi in bibendum ante, eget posuere leo. Curabitur maximus lacus ut erat malesuada tristique.</p>

    <Link to="/" style={{ background: 'red', color: 'white', padding: 20, borderRadius: 15, fontWeight: 'bold' }}> &larr; Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
